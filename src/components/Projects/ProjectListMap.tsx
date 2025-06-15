"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Projects } from "@/types/projects";
import { FiChevronLeft, FiChevronRight, FiCalendar } from "react-icons/fi";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProjectPopup from "./ProjectPopUp";
import { formatDate } from "@/lib/helper/dateformatter";
import { AnimatedDiv } from "../Animation";

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

type Props = {
  projectData: Projects[];
};

const ProjectListMap = ({ projectData }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [svgIcon, setSvgIcon] = useState<any>(null);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [isListOpen, setIsListOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const listRef = useRef<any>(null);

  // Filter projects based on search term
  const filteredProjects = projectData.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const onListItemClick = useCallback(
    (project: Projects) => {
      if (mapRef.current) {
        mapRef.current.setView([project.latitude, project.longitude], 10, {
          animate: true,
        });
      }

      setActiveProjectId(project.id);

      // Scroll to the item in the virtualized list
      const index = filteredProjects.findIndex((p) => p.id === project.id);
      if (index !== -1 && listRef.current) {
        listRef.current.scrollToItem(index, "center");
      }
    },
    [filteredProjects],
  );

  useEffect(() => {
    setIsClient(true);

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

  const ProjectRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const project = filteredProjects[index];
    return (
      <div
        key={project.id}
        style={style}
        className={`cursor-pointer p-4 transition-all duration-200 ${activeProjectId === project.id
          ? "bg-gray-100 dark:bg-gray-700"
          : "hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        onClick={() => onListItemClick(project)}
      >
        <div className="flex items-start justify-between">
          <h3 className="truncate font-medium text-gray-900 dark:text-white">
            {project.name}
          </h3>
        </div>
        <div className="text-body-color dark:text-body-color-dark mt-1 flex items-center text-sm">
          <FiCalendar className="mr-1" />
          <span>{formatDate(project.date)}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (activeProjectId) {
      const marker = markersRef.current[activeProjectId];
      if (marker) {
        marker.openPopup();
      }
    }
  }, [activeProjectId]);

  if (!isClient || !svgIcon) return null;

  return (
    <section id="projectListMap" className="py-8 md:py-12 lg:py-20">
      <div className="container">
        <AnimatedDiv variant="slideUp" className="h-[600px]">
          <div className="relative flex h-[600px] w-full shadow">
            {/* Collapse/Expand Button - Always visible */}
            <button
              onClick={() => setIsListOpen(!isListOpen)}
              className={`bg-primary hover:bg-primary/90 absolute top-1/2 z-1200 flex h-10 w-6 items-center justify-center rounded-r-md text-white shadow-md transition-all ${isListOpen ? "left-80" : "left-0"
                }`}
              style={{ transform: "translateY(-50%)" }}
            >
              {isListOpen ? (
                <FiChevronLeft size={18} />
              ) : (
                <FiChevronRight size={18} />
              )}
            </button>

            {/* List Panel */}
            <div
              className={`dark:bg-dark h-full overflow-hidden border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${isListOpen ? "w-80" : "w-0"
                }`}
            >
              <div
                className={`flex h-full flex-col ${!isListOpen && "hidden"}`}
              >
                <div className="p-4">
                  <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                    Projects
                  </h2>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-1 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>

                <div className="flex-1">
                  <AutoSizer>
                    {({ height, width }) => (
                      <List
                        ref={listRef}
                        height={height}
                        itemCount={filteredProjects.length}
                        itemSize={72}
                        width={width}
                      >
                        {ProjectRow}
                      </List>
                    )}
                  </AutoSizer>
                </div>
              </div>
            </div>

            {/* Map Panel */}
            <div
              className={`h-full transition-all duration-300 ${isListOpen ? "flex-1" : "w-full"
                }`}
            >
              <MapContainer
                center={[1.4927, 103.7414]}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                ref={mapRef}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                {projectData.map((project) => (
                  <Marker
                    key={project.id}
                    icon={svgIcon}
                    position={[project.latitude, project.longitude]}
                    eventHandlers={{
                      click: () => {
                        setActiveProjectId(project.id);
                      },
                    }}
                    ref={(marker) => {
                      if (marker) {
                        markersRef.current[project.id] = marker;
                      }
                    }}
                  >
                    <Popup
                      position={[project.latitude, project.longitude]}
                    //onClose={() => setActiveProjectId(null)}
                    >
                      <ProjectPopup project={project} />
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ProjectListMap;
