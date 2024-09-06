import React from "react";
import Image from "next/image";

interface ProjectComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectComponent({
  title,
  description,
  imageUrl,
  technologies,
  githubLink,
  liveLink,
}: ProjectComponentProps) {
  return (
    <div className="bg-ocean-dark rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border-2 border-michael-green flex flex-col h-full">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-michael-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-ocean-light text-michael-white px-2 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-michael-green hover:underline"
              >
                GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-michael-green hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
