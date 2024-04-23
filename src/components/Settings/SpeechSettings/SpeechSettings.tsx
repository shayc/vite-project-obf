import { Label, Slider, useId } from "@fluentui/react-components";

interface SpeechSettingsProps {
  onPitchChange?: (pitch: number) => void;
  onRateChange?: (rate: number) => void;
  onVolumeChange?: (volume: number) => void;
  pitch?: number;
  rate?: number;
  volume?: number;
}

export function SpeechSettings(props: SpeechSettingsProps) {
  const { volume, rate, pitch, onVolumeChange, onPitchChange, onRateChange } =
    props;

  const volumeId = useId();
  const rateId = useId();
  const pitchId = useId();

  return (
    <div>
      <div>
        <Label htmlFor={volumeId}>Volume</Label>
        <Slider
          value={volume}
          min={1}
          max={2}
          step={0.1}
          id={volumeId}
          onChange={(_ev, data) => onVolumeChange?.(data.value)}
        />
      </div>

      <div>
        <Label htmlFor={rateId}>Rate</Label>
        <Slider
          value={rate}
          min={1}
          max={2}
          step={0.1}
          id={rateId}
          onChange={(_ev, data) => onRateChange?.(data.value)}
        />
      </div>

      <div>
        <Label htmlFor={pitchId}>Pitch</Label>
        <Slider
          value={pitch}
          min={1}
          max={2}
          step={0.1}
          id={pitchId}
          onChange={(_ev, data) => onPitchChange?.(data.value)}
        />
      </div>
    </div>
  );
}
