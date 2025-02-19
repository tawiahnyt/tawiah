/** @format */

"use client";

import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import TextRotate from "@/fancy/components/text/text-rotate";

function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
      <BlurFade delay={BLUR_DELAY}>
        <div className="flex items-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white pe-3">
            Hi, I
          </h1>
          {"  "}
          <TextRotate
            texts={DATA.personalData.name}
            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-3xl md:text-6xl font-bold mb-4"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_DELAY * 2}>
        <div className="text-lg text-muted-foreground mb-6">
          {DATA.personalData.description}
        </div>
      </BlurFade>

      <div className="mb-8">
        <BlurFade delay={BLUR_DELAY * 9}>
          <h2 className="text-2xl font-semibold mb-4 text-white">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-3">
          {DATA.personalData.skill.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_DELAY * 10 + id * 0.05}>
              <Badge className="px-4 py-2 text-xs md:text-sm rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                {skill}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>

      <BlurFade delay={BLUR_DELAY * 30}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="group rounded-full" asChild>
            <a href={DATA.personalData.resume} download>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download CV
            </a>
          </Button>
          <Button
            variant="outline"
            className="group text-black dark:text-white rounded-full"
            asChild
          >
            <a href={`mailto:${DATA.personalData.email}`}>
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              Contact Me
            </a>
          </Button>
        </div>
      </BlurFade>
    </div>
  );
}

export default Home;
