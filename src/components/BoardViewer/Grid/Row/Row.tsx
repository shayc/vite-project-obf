import clsx from "clsx";
import React from "react";
import classes from "./Row.module.css";

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export function Row(props: RowProps) {
  const { children, className: classNameProp } = props;

  const className = clsx(classes.row, classNameProp);

  return (
    <div className={className} role="row">
      {children}
    </div>
  );
}
