import React from "react";
import Image from "next/image";

interface ProjectComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectComponent({
  title,
  description,
  imageUrl,
  skills,
  githubLink,
  liveLink,
}: ProjectComponentProps) {
  return (
    <div className="bg-ocean-dark rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border-2 border-michael-green flex flex-col h-full group">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-michael mb-2 group-hover:text-michael-green duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((tech, index) => (
              <span
                key={index}
                className="bg-michael-green bg-opacity-50 text-michael-white px-2 py-1 rounded-lg text-sm"
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
