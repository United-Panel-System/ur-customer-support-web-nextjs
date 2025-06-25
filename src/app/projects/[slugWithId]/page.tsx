import { getProjectById } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import { getProjectSchema } from "@/lib/seo/schema";

import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

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
    notFound();
  }

  let project;
  try {
    project = await getProjectById(Number(id));
  } catch (error) {
    notFound();
  }

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProjectSchema(project.data)),
          }}
        />
      </head>
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
