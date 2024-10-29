import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    // <div className="relative z-10 m-4 overflow-hidden border-2 border-blue-400 bg-white py-4 pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
    <div
      className={`container mx-auto p-8 ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
    // </div>
  );
}
