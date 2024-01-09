import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

interface SelectComponentProps {
  label?: string;
  options: string[];
  defaultValue: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
  minWidth?: number;
}

export function SelectComponent({
  label,
  options,
  defaultValue,
  onChange,
  fullWidth = false,
  minWidth = 120,
}: SelectComponentProps) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const handleValueChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Box sx={{ minWidth }}>
      <FormControl fullWidth={fullWidth}>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedValue}
          label={label}
          onChange={handleValueChange}
          sx={{
            color: "#4D4D4D",
            ".MuiOutlinedInput-input": { padding: "6px 16px" },
          }}
          IconComponent={ExpandMoreRoundedIcon}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} sx={{ color: "#000" }}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
