import { Project } from "@/types";
import { CustomMarkdown } from "../markdown/custom";

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
      <hr className="my-4" />
      <header className="mb-4">
        <h1 className="font-bold text-lg">작품소개</h1>
      </header>
      <CustomMarkdown text={description} />
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
