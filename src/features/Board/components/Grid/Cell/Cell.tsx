import { makeStyles, tokens } from "@fluentui/react-components";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles({
  cell: {
    flex: "1",
    minWidth: "0",
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorNeutralStencil1Alpha,

    ":not(:empty)": {
      backgroundColor: "transparent",
    },
  },
});

interface CellProps {
  children: React.ReactNode;
  className?: string;
}

export function Cell({ children, className: classNameProp }: CellProps) {
  const classes = useStyles();
  const className = clsx(classes.cell, classNameProp);

  return (
    <div className={className} role="gridcell">
      {children}
    </div>
  );
}
