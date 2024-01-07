import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { ProjectItem } from "../projects/item";

export const MainProjectSection = async () => {
  const projects = (
    await createClient(cookies())
      .from("projects")
      .select("*, project_skills(*, skill:skills(*)), project_images(*)")
      .eq("is_main", true)
      .order("year", {
        ascending: false,
      })
  ).data;

  return (
    <section className="p-5 md:p-10">
      <header className="mb-10">
        <h2 className="font-bold text-2xl">
          Main Projects{" "}
          <span className="text-sm font-normal font-coding text-todo">
            // TODO: Check this out!
          </span>
        </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-10">
        {projects?.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
