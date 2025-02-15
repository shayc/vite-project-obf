import { makeStyles } from "@fluentui/react-components";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles({
  row: {
    flex: "1",
    display: "flex",
    gap: "var(--gap)",
  },
});

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export function Row({ children, className: classNameProp }: RowProps) {
  const classes = useStyles();
  const className = clsx(classes.row, classNameProp);

  return (
    <div className={className} role="row">
      {children}
    </div>
  );
}
