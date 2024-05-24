import {
  Button,
  makeStyles,
  tokens,
  useArrowNavigationGroup,
} from "@fluentui/react-components";
import { BackspaceFilled, DeleteFilled } from "@fluentui/react-icons";
import clsx from "clsx";
import { Pictogram } from "../Pictogram/Pictogram";

const useStyles = makeStyles({
  sentenceBox: {
    boxSizing: "border-box",
    display: "flex",
    minHeight: "112px",
    padding: tokens.spacingHorizontalL,
    margin: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    borderRadius: tokens.borderRadiusXLarge,
    background: tokens.colorNeutralBackground6,
  },
  sentence: {
    flex: "1",
    display: "flex",
  },
  value: {
    display: "flex",
  },
  actions: {
    display: "flex",
    alignSelf: "center",
    gap: tokens.spacingHorizontalS,
  },
});

interface SentenceBoxProps {
  className?: string;
  value?: { label: string; src: string }[];
}

export const SentenceBox = (props: SentenceBoxProps) => {
  const { value, className: classNameProp } = props;

  const attrs = useArrowNavigationGroup({ axis: "horizontal" });
  const classes = useStyles();
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

      <div className={classes.actions} {...attrs}>
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
