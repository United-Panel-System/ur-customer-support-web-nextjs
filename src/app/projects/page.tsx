import { getProjects } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";

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
      <BreadcrumbWithBgImg
        pageName="Projects"
        description="Discover our portfolio of completed and ongoing projects across various sectors. Each project reflects our commitment to quality, sustainability, and customer satisfaction through smart engineering and reliable execution."
        image="/images/projects/IMG-20250520-WA0017.jpg"
      />
    </>
  );
};

export default ProjectPage;
