"use client";

import { Database } from "@/types/database.types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Creatable from "react-select/creatable";
import { CustomMarkdown } from "../markdown/custom";

type Inputs = Database["public"]["Tables"]["projects"]["Insert"] & {
  skills: { label: string; value: number; __isNew__?: boolean }[];
};

type ProjectFormProps = {
  projectId: number | null;
};
export const ProjectForm = ({ projectId }: ProjectFormProps) => {
  const { control, setValue, register, handleSubmit, reset, watch } =
    useForm<Inputs>({
      defaultValues: {
        skills: [],
      },
    });
  const [skills, setSkills] = useState<
    Database["public"]["Tables"]["skills"]["Row"][]
  >([]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { skills, ...project } = data;
    let pid: number | null = projectId;
    if (!!pid) {
      // update
      await createClient()
        .from("projects")
        .update({ id: pid, ...project })
        .eq("id", pid);
    } else {
      // insert
      const newProjectId = (
        await createClient()
          .from("projects")
          .insert(project)
          .select("*")
          .single()
      ).data?.id;
      pid = newProjectId ?? null;
    }
    if (pid) {
      // remove skills
      await createClient()
        .from("project_skills")
        .delete()
        .eq("project_id", pid);
      // add new skills
      let existingSkillIds = skills
        .filter((skill) => !skill.__isNew__)
        .map((skill) => skill.value);
      const newSkills = skills.filter((skill) => skill.__isNew__);
      if (newSkills.length > 0) {
        const results = (
          await createClient()
            .from("skills")
            .insert(
              newSkills.map((skill) => ({
                name: skill.label,
                is_created: true,
              }))
            )
            .select("*")
        ).data;
        if (results)
          existingSkillIds = existingSkillIds.concat(
            results.map((res) => res.id)
          );
      }
      // add skills
      const project_id = pid;
      await createClient()
        .from("project_skills")
        .insert(
          existingSkillIds.map((skillId) => ({
            project_id,
            skill_id: skillId,
          }))
        );
    }
  };

  // load data
  useEffect(() => {
    if (projectId)
      createClient()
        .from("projects")
        .select("*, project_skills(*, skill:skills(id, name))")
        .eq("id", projectId)
        .single()
        .then(({ data }) => {
          if (data) {
            const { project_skills, id, created_at, ...rest } = data;
            // @ts-ignore
            Object.keys(rest).forEach((key) => setValue(key, rest[key]));
            // set skills
            setValue(
              "skills",
              project_skills
                .filter((ps) => !!ps.skill)
                .map(({ skill }) => ({
                  label: skill?.name ?? "",
                  value: skill?.id ?? -1,
                }))
            );
          }
        });
    else reset();

    // load skill data
    createClient()
      .from("skills")
      .select("*")
      .then((res) => setSkills(res.data ?? []));
  }, [projectId]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-5 rounded-2xl flex flex-col gap-4"
    >
      <input
        {...register("year")}
        type="number"
        className="input"
        placeholder="year"
      />
      <input
        {...register("title")}
        type="text"
        className="input"
        placeholder="title"
      />
      <input
        {...register("slug")}
        type="text"
        className="input"
        placeholder="slug"
      />
      <input
        {...register("summary")}
        type="text"
        className="input"
        placeholder="summary"
      />
      <div className="grid grid-cols-2 gap-4">
        <textarea
          {...register("description")}
          className="input"
          placeholder="description"
          rows={30}
        ></textarea>
        <div className="text-black">
          <CustomMarkdown text={watch("description")} />
        </div>
      </div>

      <input
        {...register("thumbnail")}
        type="text"
        className="input"
        placeholder="thumbnail"
      />

      <div>
        <label htmlFor="is_published" className="text-black">
          배포여부
        </label>
        <input
          id="is_published"
          {...register("is_published")}
          type="checkbox"
        />
      </div>

      <Controller
        name="skills"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <Creatable
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            className="text-black"
            isMulti
            options={skills.map((skill) => ({
              label: skill.name,
              value: skill.id,
            }))}
          />
        )}
      />

      <input
        {...register("github_link")}
        type="text"
        className="input"
        placeholder="github_link"
      />
      <input
        {...register("youtube_link")}
        type="text"
        className="input"
        placeholder="youtube_link"
      />
      <button className="bg-purple-500 px-3 py-2 rounded-xl" type="submit">
        저장하기
      </button>
    </form>
  );
};
