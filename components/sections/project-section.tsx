import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import { ProjectItem } from "../projects/item";

export const ProjectSection = async () => {
  const skills = (
    await createClient(cookies())
      .from("skills")
      .select("*")
      .eq("is_created", false)
  ).data;

  const projects = (
    await createClient(cookies())
      .from("projects")
      .select("*, project_skills(*, skill:skills(*)), project_images(*)")
      .order("year", {
        ascending: false,
      })
  ).data;

  return (
    <section className="p-5 md:p-10">
      <header className="mb-5">
        <h2 className="font-bold text-2xl">Projects</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[200px__1fr] gap-5">
        <nav className="flex md:flex-col gap-4 bg-zinc-900 p-5 rounded-xl h-fit overflow-x-auto md:overflow-x-hidden">
          {skills?.map(({ id, name, icon }) => (
            <button key={id} className="flex-none flex gap-4 items-center">
              {icon ? (
                <Image src={icon} alt={name} width={32} height={32} />
              ) : null}
              {name}
            </button>
          ))}
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {projects?.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
