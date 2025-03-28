import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";
const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle title="Tech Stack" />
      <div className="grid py-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
