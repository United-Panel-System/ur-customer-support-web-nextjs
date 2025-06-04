"use client";

import React, { useEffect, useRef } from "react";
import fitty from "fitty";

interface FitTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  minSize?: number;
  maxSize?: number;
  multiline?: boolean;
}

const FitText = ({
  children,
  minSize = 12,
  maxSize = 80,
  multiline = false,
  ...props
}: FitTextProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const fitter = fitty(ref.current, {
      minSize,
      maxSize,
      multiLine: multiline,
      observeMutations: {
        subtree: true,
        childList: true,
        characterData: true,
      },
    });
    return () => fitter.unsubscribe();
  }, [children, minSize, maxSize, multiline]);

  return (
    <div
      ref={ref}
      {...props}
      style={{
        whiteSpace: multiline ? "normal" : "nowrap",
        overflow: "hidden",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};

export default FitText;
