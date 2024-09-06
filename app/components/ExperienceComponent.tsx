import React from "react";
import Image from "next/image";

interface ExperienceComponentProps {
  company: string;
  role: string;
  tenure: string;
  accomplishments: string[];
  skills: string[];
}

export default function ExperienceComponent({
  company,
  role,
  tenure,
  accomplishments,
  skills,
}: ExperienceComponentProps) {
  return (
    <div className="bg-ocean-dark rounded-lg overflow-hidden transition-all duration-300 border-2 border-michael-green flex flex-col w-full max-w-3xl mx-auto mb-8">
      <div className="p-8 flex flex-col">
        <div className="flex items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-michael-white">{company}</h3>
            <p className="text-xl text-michael-green font-semibold mt-1">
              {role}
            </p>
            <p className="text-gray-300 text-sm mt-1">{tenure}</p>
          </div>
        </div>
        <ul className="text-gray-300 mb-6 list-disc list-outside ml-6 space-y-2">
          {accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
        <div className="mt-auto">
          <h4 className="text-michael-white font-semibold mb-2">
            Skills & Tools:
          </h4>
          <div className="flex flex-wrap gap-2 bg-ocean-light bg-opacity-20 p-3 rounded-lg">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-michael-green bg-opacity-50 text-michael-white px-3 py-1 rounded-lg text-sm cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
