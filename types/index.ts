import { Database } from "./database.types";

type _ProjectSkill = Database["public"]["Tables"]["project_skills"]["Row"];
interface ProjectSkill extends _ProjectSkill {
  skill: Database["public"]["Tables"]["skills"]["Row"] | null;
}
type _Project = Database["public"]["Tables"]["projects"]["Row"];
export interface Project extends _Project {
  project_skills: ProjectSkill[];
  project_images: Database["public"]["Tables"]["project_images"]["Row"][];
}
