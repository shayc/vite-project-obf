import classes from "./Output.module.css";

interface OutputProps {
  value?: string[];
}

export const Output = (props: OutputProps) => {
  const { value } = props;

  return (
    <div className={classes.output}>
      {value?.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};
