"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Projects } from "@/types/projects";
import ProjectPopup from "./ProjectPopUp";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const dummyProjects: Projects[] = [
  {
    id: 1,
    name: "Commercial Cold Room",
    description: "Large-scale cold storage facility for commercial use",
    imageUrls: ["/images/blog/blog-01.jpg"],
    latitude: 1.3521,
    longitude: 103.8198,
    isActive: true,
    date: "2023-05-15",
  },
  {
    id: 2,
    name: "Medical Refrigeration",
    description: "Specialized refrigeration for medical supplies",
    imageUrls: ["/images/blog/blog-01.jpg"],
    latitude: 1.2903,
    longitude: 103.8515,
    isActive: true,
    date: "2023-07-22",
  },
  {
    id: 3,
    name: "Industrial Freezer",
    description: "Heavy-duty freezer for industrial applications",
    imageUrls: ["/images/blog/blog-01.jpg"],
    latitude: 1.4927,
    longitude: 103.7414,
    isActive: true,
    date: "2023-09-10",
  },
];

const ProjectMap = ({ projectData }: { projectData: Projects[] }) => {
  const [isClient, setIsClient] = useState(false);
  const [svgIcon, setSvgIcon] = useState<any>(null);

  useEffect(() => {
    setIsClient(true); // Mark that client has mounted

    import("leaflet").then((L) => {
      const icon = L.divIcon({
        html: `
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000">
            <path style="fill:#FF6465;" d="M256.001,8.48c-86.358,0-156.365,70.007-156.365,156.365c0,78.568,60.886,227.415,156.365,338.675 c95.479-111.259,156.365-260.107,156.365-338.675C412.365,78.487,342.358,8.48,256.001,8.48z"></path>
            <circle style="fill:#FFFFFF;" cx="256" cy="164.845" r="71.563"></circle>
          </svg>`,
        className: "svg-marker",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      setSvgIcon(icon);
    });
  }, []);

  if (!isClient || !svgIcon) return null;

  return (
    <div className="relative h-[500px] w-full">
      <MapContainer
        center={[1.4927, 103.7414]}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projectData.map((project) => (
          <Marker
            key={project.id}
            icon={svgIcon}
            position={[project.latitude, project.longitude]}
          >
            <Popup>
              <ProjectPopup project={project} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ProjectMap;
