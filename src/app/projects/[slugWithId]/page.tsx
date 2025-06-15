import { getProjectById } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProjectDetails from "@/components/Projects/ProjectDetails";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slugWithId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slugWithId } = await params;
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "Invalid Project ID",
    };
  }

  const project = await getProjectById(Number(id));
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project.data.name} | United Panel-System (M) Sdn. Bhd.`,
    description: project.data.description,
    openGraph: {
      images: [project.data.imageUrls[0], ...previousImages],
    },
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slugWithId } = await params;
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return <div>Invalid Project ID</div>;
  }

  const project = await getProjectById(Number(id));

  return (
    <>
      <BreadcrumbWithBgImg
        pageName={project.data.name}
        description=""
        image={
          project.data.imageUrls[0] ?? "/images/projects/IMG-20250520-WA0017.jpg"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: `${project.data.name}` },
        ]}
      />

      <ProjectDetails project={project.data} />
    </>
  );
}
