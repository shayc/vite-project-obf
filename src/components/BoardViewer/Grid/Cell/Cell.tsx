import clsx from "clsx";
import React from "react";
import classes from "./Cell.module.css";

interface CellProps {
  children: React.ReactNode;
  className?: string;
}

export function Cell(props: CellProps) {
  const { children, className: classNameProp } = props;

  const className = clsx(classes.cell, classNameProp);

  return <div className={className}>{children}</div>;
}
