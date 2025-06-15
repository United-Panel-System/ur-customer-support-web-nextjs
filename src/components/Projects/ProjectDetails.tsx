"use client";
import { useState } from "react";
import Image from "next/image";
import { FiX, FiChevronRight } from "react-icons/fi";
import { capitalize } from "lodash";
import { Projects } from "@/types/projects";
import { formatDate } from "@/lib/helper/dateformatter";
import { AnimatedDiv } from "../Animation";

type ProjectDetailsProps = {
  project: Projects;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container">
        <AnimatedDiv
          staggerChildren={0.2}
          className="bg-white shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="dark:from-dark/20 dark:to-dark/10 bg-gradient-to-r p-8">
            <div className="space-y-3">
              {/* Title and Date */}
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h1 className="mb-4 text-2xl leading-tight! font-bold text-black sm:text-3xl md:text-4xl dark:text-white">
                  {project.name}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.date ? formatDate(project.date) : ""}
                </span>
              </div>

              {/* Description */}
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed! md:text-lg">
                {project.description}
              </p>
            </div>
          </div>

          {project.imageUrls.length > 0 && (
            <div className="p-8">
              {/* Gallery Section */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                    Project Gallery
                  </h2>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.imageUrls.length}{" "}
                    {project.imageUrls.length === 1 ? "Photo" : "Photos"}
                  </span>
                </div>

                <div
                  className={`grid gap-5 ${project.imageUrls.length === 1
                    ? "grid-cols-1"
                    : project.imageUrls.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-2 md:grid-cols-3"
                    }`}
                >
                  {project.imageUrls.map((img, index) => (
                    <div
                      key={index}
                      className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-lg"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${project.name} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-gray-800 backdrop-blur-sm">
                          <FiChevronRight size={24} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </AnimatedDiv>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative h-full w-full max-w-7xl">
              <button
                className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <FiX size={28} />
              </button>

              <Image
                src={selectedImage}
                alt={`${project.name} - Enlarged view`}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
