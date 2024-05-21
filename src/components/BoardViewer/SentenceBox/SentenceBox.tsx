import { Button } from "@fluentui/react-components";
import { BackspaceFilled, DeleteFilled } from "@fluentui/react-icons";
import clsx from "clsx";
import { Pictogram } from "../Pictogram/Pictogram";
import classes from "./SentenceBox.module.css";

interface SentenceBoxProps {
  className?: string;
  value?: { label: string; src: string }[];
}

export const SentenceBox = (props: SentenceBoxProps) => {
  const { value, className: classNameProp } = props;

  const className = clsx(classes.sentenceBox, classNameProp);

  return (
    <div className={className} aria-label="Sentence box">
      <div className={classes.sentence}>
        {value?.map((item, index) => (
          <div className={classes.value} key={index}>
            <Pictogram label={item.label} src={item.src} />
          </div>
        ))}
      </div>

      <div className={classes.actions}>
        <Button
          title="Backspace"
          aria-label="Backspace"
          size="large"
          appearance="subtle"
          icon={<BackspaceFilled />}
        />

        <Button
          title="Clear"
          aria-label="Clear"
          size="large"
          appearance="subtle"
          icon={<DeleteFilled />}
        />
      </div>
    </div>
  );
};
