import { Pictogram } from "../Pictogram/Pictogram";
import classes from "./Output.module.css";

interface OutputProps {
  value?: { label: string; src: string }[];
}

export const Output = (props: OutputProps) => {
  const { value } = props;

  return (
    <div className={classes.output}>
      {value?.map((item, index) => (
        <div className={classes.value} key={index}>
          <Pictogram label={item.label} src={item.src} />
        </div>
      ))}
    </div>
  );
};
