import { formatDate } from "@/lib/helper/dateformatter";
import { Projects } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import slugify from "slugify";

interface ProjectPopupProps {
  project: Projects;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project }) => {
  return (
    <div className="max-w-[300px] space-y-3 p-2">
      {/* Header with title and date */}
      <div className="space-y-1 border-b border-gray-100 pb-2">
        <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <FiCalendar className="mr-1" />
          {formatDate(project.date)}
        </div>
      </div>

      {/* Description */}
      {project.description && (
        <p className="line-clamp-3 text-sm text-gray-700">
          {project.description}
        </p>
      )}

      {/* Image (if available) */}
      {project.imageUrls?.length > 0 && (
        <div className="relative h-40 w-full min-w-[200px] overflow-hidden rounded-md">
          <Image
            src={project.imageUrls[0]}
            alt={`${project.name}`}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, 300px"
            unoptimized
          />
        </div>
      )}

      {/* Always show the CTA */}
      <div className="flex justify-end pt-1">
        <Link
          href={`/projects/${slugify(project.name, { lower: true })}-${project.id}`}
          className="text-primary hover:text-primary/80 text-xs font-medium hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectPopup;
