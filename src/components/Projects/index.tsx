"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ProjectMap from "../Map/ProjectMap";
import { Projects } from "@/types/projects";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const OurProject = ({ projectData }: { projectData: Projects[] }) => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 inline-flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-md shadow-md transition duration-200 ease-in-out hover:shadow-xl">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="our-project" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Our Project"
              paragraph="Discover our portfolio of completed and ongoing projects across various sectors. Each project reflects our commitment to quality, sustainability, and customer satisfaction through smart engineering and reliable execution."
              mb="44px"
            />

            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Delivered on time & within budget" />
                  <List text="Sustainable & eco-friendly practices" />
                  <List text="Customized client-focused solutions" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Experienced & certified professionals" />
                  <List text="End-to-end project management" />
                  <List text="Innovative technology integration" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <ProjectMap projectData={projectData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
