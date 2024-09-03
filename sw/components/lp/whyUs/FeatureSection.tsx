"use client";
import React from "react";

export function FeatureSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl text-foreground font-bold">
        {title.split(" ").map((word, i) => (
          <span
            key={i}
            className={`${
              (word === "Parceiro" || word === "Inovação") &&
              "text-brand-primary dark:text-brand-secondary"
            }`}
          >
            {word}{" "}
          </span>
        ))}
      </h2>

      <p className="text-base lg:text-base max-w-5xl my-4 text-foreground/90">
        {description}
      </p>
    </div>
  );
}
