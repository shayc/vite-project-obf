import { Button } from "@fluentui/react-components";
import { BackspaceFilled, DeleteFilled } from "@fluentui/react-icons";
import { Pictogram } from "../Pictogram/Pictogram";
import classes from "./SentenceBox.module.css";

interface SentenceBoxProps {
  value?: { label: string; src: string }[];
}

export const SentenceBox = (props: SentenceBoxProps) => {
  const { value } = props;

  return (
    <div className={classes.sentenceBox} aria-label="Sentence box">
      {value?.map((item, index) => (
        <div className={classes.value} key={index}>
          <Pictogram label={item.label} src={item.src} />
        </div>
      ))}
      <div>
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
