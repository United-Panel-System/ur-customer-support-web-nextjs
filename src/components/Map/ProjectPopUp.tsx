import { formatDate } from "@/lib/helper/dateformatter";
import { Projects } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectPopupProps {
  project: Projects;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project }) => {
  return (
    <div className="max-w-[280px] space-y-3">
      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-1">📅</span>
          {formatDate(project.date)}
        </div>
        {project.description && (
          <p className="text-sm text-gray-700">{project.description}</p>
        )}
      </div>

      {/* Clickable Image */}
      {project.imageUrls != null && project.imageUrls.length > 0 && (
        <div className="mt-2">
          <button className="w-full focus:outline-none">
            <div className="relative h-40 w-full min-w-[200px]">
              <img
                src={project.imageUrls[0]}
                alt="Project visual"
                className="h-40 w-full min-w-[200px] rounded-md border border-gray-200 object-cover transition-opacity hover:opacity-90"
              />
            </div>
          </button>
          <div className="mt-2 w-full text-right">
            <Link
              href=""
              className="hover:text-primary text-primary text-xs hover:underline"
            >
              View More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPopup;
