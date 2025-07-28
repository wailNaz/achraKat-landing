"use client";

import React from "react";

export function AnimatedBackground({ className = "", style = {}, ...props }) {
  return (
    <div
      className={`fixed inset-0 -z-10 bg-[image:var(--background-gradient)] bg-no-repeat bg-cover animate-subtle-gradient-bg ${className}`}
      style={style}
      aria-hidden="true"
      {...props}
    >
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
    </div>
  );
}
