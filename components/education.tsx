import { DATA } from '@/resume-data/data'
import React from 'react'

const Education = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)]  text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-start">
          <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-10 inline-flex items-center">
            Education
            <div className="relative">
              <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
            </div>
          </h2>
        </div>

        <div className="space-y-8 pb-20">
          {DATA.educations.map((education, index) => (
            <div
              key={`${education.title}-${index}`}
              className="space-y-4 border p-4 rounded-2xl"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-sm md:text-2xl font-semibold">
                  {education.title}
                </h3>
                <div className="text-right">
                  <div className="text-sm md:text-xl">{education.year}</div>
                </div>
              </div>

              <div className="flex justify-between">
                <h4 className="md:text-xl font-medium text-emerald-400">
                  {education.school}
                </h4>
                <div className="md:text-xl mt-1">{education.location}</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium">
                  {education.field}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education