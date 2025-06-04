import { getProjects } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProjectCTA from "@/components/CTA/ProjectCTA";
import ProjectListMap from "@/components/Projects/ProjectListMap";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | United Panel-System (M) Sdn. Bhd.",
  description:
    "Discover our portfolio of completed and ongoing projects across various sectors. Each project reflects our commitment to quality, sustainability, and customer satisfaction through smart engineering and reliable execution.",
  // other metadata
};

const ProjectPage = async () => {
  const projects = await getProjects(
    { isActive: true },
    {
      cache: "no-store",
    },
  );
  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Projects"
        description="Discover our projects across industries—built with care, quality, and a focus on your satisfaction."
        image="/images/projects/IMG-20250520-WA0017.jpg"
      />

      <ProjectListMap projectData={projects.data} />
      <ProjectCTA />
    </>
  );
};

export default ProjectPage;
