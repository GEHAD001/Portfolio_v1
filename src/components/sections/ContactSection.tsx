"use client";
import React from "react";
import CopyButton from "../CopyButton";
import { contacts } from "@/data/contacts";
import { motion } from "motion/react";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen py-16 px-4 flex flex-col items-center justify-center">
      <DotPattern className="opacity-20" />
      <h2 className="text-3xl font-bold text-amber-600 dark:text-indigo-300 mb-12 transition-colors duration-300">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-6">
        {contacts.map(({ name, user, Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full"
          >
            <CopyButton
              copyValue={user}
              message={`${name} contact copied to clipboard!`}
              className="relative flex flex-col justify-center items-center h-full p-8
                        bg-amber-50/50 dark:bg-indigo-950/50
                        border border-amber-600/20 dark:border-indigo-300/20
                        rounded-lg shadow-md w-full min-w-[250px] min-h-[220px]
                        transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-amber-600 dark:text-indigo-300 transition-colors duration-300 mb-4">
                <Icon size={64} />
              </div>
              <h3 className="text-xl font-medium text-amber-700 dark:text-indigo-200 transition-colors duration-300 mb-2">
                {name}
              </h3>
              <p className="text-sm text-amber-800/70 dark:text-slate-300/70 transition-colors duration-300 text-center break-all">
                {user}
              </p>
              <div className="absolute bottom-3 right-3 text-xs text-amber-600/60 dark:text-indigo-300/60">
                Click to copy
              </div>
            </CopyButton>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
