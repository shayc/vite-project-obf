import {
  Button,
  makeStyles,
  tokens,
  useArrowNavigationGroup,
} from "@fluentui/react-components";
import { BackspaceFilled, DeleteFilled } from "@fluentui/react-icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { withRTL } from "../../../../utils/withRTL";
import { Pictogram } from "../Pictogram/Pictogram";

const BackspaceFilledWithRTL = withRTL(BackspaceFilled);

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
  onBackspaceClick: () => void;
  onClearClick: () => void;
  value: { label: string; src: string }[];
}

export function SentenceBox({
  className: classNameProp,
  value,
  onBackspaceClick,
  onClearClick,
}: SentenceBoxProps) {
  const { t } = useTranslation();
  const classes = useStyles();
  const className = clsx(classes.sentenceBox, classNameProp);
  const attrs = useArrowNavigationGroup({ axis: "horizontal" });

  return (
    <div className={className} aria-label={t("board.sentenceBox")}>
      <div className={classes.sentence}>
        {value?.map((item, index) => (
          <div className={classes.value} key={index}>
            <Pictogram label={item.label} src={item.src} />
          </div>
        ))}
      </div>

      <div className={classes.actions} {...attrs}>
        <Button
          title={t("board.backspace")}
          aria-label={t("board.backspace")}
          size="large"
          appearance="subtle"
          icon={<BackspaceFilledWithRTL />}
          onClick={onBackspaceClick}
        />

        <Button
          title={t("board.clear")}
          aria-label={t("board.clear")}
          size="large"
          appearance="subtle"
          icon={<DeleteFilled />}
          onClick={onClearClick}
        />
      </div>
    </div>
  );
}
