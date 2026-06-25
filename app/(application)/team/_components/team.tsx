"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { Department } from "../types";
import { RiLinkedinLine } from "react-icons/ri";

export function DepartmentSection({
  department,
  index,
}: {
  department: Department;
  index: number;
}) {;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-t border-border py-14 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_2fr]">
        {/* Department label */}
        <div className="lg:pr-8">
          <h3 className="mt-4 text-2xl font-semibold text-foreground">
            {department.title}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {department.description}
          </p>
        </div>

        {/* Members */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {department.members.map((member) => (
            <article key={member.name} className="group">
              <div className="relative aspect-4/5 overflow-hidden bg-card">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <h4 className="mt-4 text-base font-semibold text-foreground">
                {member.name}
              </h4>
              <p className="text-sm text-accent">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {member.specialty}
              </p>
              {member.experience && (
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground/70">
                  {member.experience} experience
                </p>
              )}

              <div className="mt-4 flex gap-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    Hello
                    <RiLinkedinLine className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}