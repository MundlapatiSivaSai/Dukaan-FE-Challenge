import { Chip } from "@mui/material";

interface ChipProps {
  label: string;
  backgroundColor?: string;
  color?: string;
}

export function ChipComponent({ label,backgroundColor,color }: ChipProps) {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: backgroundColor,
        fontWeight: 500,
        color: color,
        p: 1,
        fontSize: 14,
      }}
    />
  );
}
