import { Project } from "@/types";
import { CustomMarkdown } from "../markdown/custom";
import Image from "next/image";
import Link from "next/link";

export const ProjectDetail = (props: Project) => {
  const {
    year,
    title,
    slug,
    summary,
    description,
    is_published,
    github_link,
    youtube_link,
    thumbnail,
    project_skills,
  } = props;
  const skills = project_skills.map((ps) => ps.skill);

  return (
    <div className="w-full p-2 md:p-2">
      <section className="mb-4">
        <header className="mb-4">
          <h1 className="font-bold text-lg">사용기술</h1>
        </header>
        {skills.map((skill) =>
          skill ? (
            <div key={skill.id} className="flex items-center">
              {skill.name}
            </div>
          ) : null
        )}
      </section>
      <hr className="my-4" />

      {github_link ? (
        <>
          <section className="mb-4">
            <header className="mb-4">
              <h1 className="font-bold text-lg">깃허브</h1>
            </header>
            <Link
              href={github_link}
              target="_blank"
              className="text-violet-500 hover:text-violet-800 transition"
            >
              {github_link}
            </Link>
          </section>
          <hr className="my-4" />
        </>
      ) : null}

      <header className="mb-4">
        <h1 className="font-bold text-lg">작품소개</h1>
      </header>
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          width={1000}
          height={1000}
          className="mb-5"
        />
      ) : null}
      <div className="mb-5">
        <CustomMarkdown text={description} />
      </div>
      {youtube_link ? (
        <div className="aspect-video rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={youtube_link}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
    </div>
  );
};
