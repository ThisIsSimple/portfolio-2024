"use client";

import { ProjectForm } from "@/components/proejct-manager/project-form";
import { ProjectItem } from "@/components/projects/item";
import { Project } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function ProjectManagerPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectId, setProjectId] = useState<number | null>(null);

  useEffect(() => {
    createClient()
      .from("projects")
      .select("*, project_skills(*, skill:skills(*)), project_images(*)")
      .then((res) => {
        setProjects(res.data ?? []);
      });
  }, []);

  return (
    <div>
      <ProjectForm projectId={projectId} />

      <section className="py-10">
        <button
          className="px-3 py-2 bg-purple-500 text-white rounded-xl"
          onClick={() => setProjectId(null)}
        >
          새로운 프로젝트
        </button>
        <div className="grid grid-cols-4">
          {projects?.map((project) => (
            <button
              key={project.id}
              onClick={(e) => {
                e.stopPropagation();
                setProjectId(project.id);
              }}
            >
              <ProjectItem {...project} isClickable={false} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
