import { getProjects } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProjectListMap from "@/components/Projects/ProjectListMap";
import { getProjectListSchema } from "@/lib/seo/schema";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectListSchema(projects.data)).replace(/</g, '\\u003c'),
        }}
      />
      <BreadcrumbWithBgImg
        pageName="Projects"
        description="Discover our projects across industries—built with care, quality, and a focus on your satisfaction."
        image="/images/projects/IMG-20250520-WA0017.jpg"
      />

      <ProjectListMap projectData={projects.data} />
    </>
  );
};

export default ProjectPage;
