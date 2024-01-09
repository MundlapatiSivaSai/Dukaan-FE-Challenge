import React from "react";
import { InputBase, IconButton, InputAdornment } from "@mui/material";

interface SearchComponentProps {
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  placeholder?: string;
  width?: number;
  padding?: string;
  border?: string;
  fontSize?: number;
  onSearch?: (value: string) => void;
}

export const Search: React.FC<SearchComponentProps> = ({
  backgroundColor,
  color = "black",
  borderRadius,
  placeholder,
  onSearch,
  width,
  padding,
  border,
  fontSize,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <InputBase
      placeholder={placeholder}
      sx={{
        color: color,
        width: width,
        display: "flex",
        alignItems: "center",
        borderRadius: borderRadius,
        border: border,
        backgroundColor: backgroundColor,
        padding: padding,
        fontSize: fontSize,
      }}
      onChange={handleSearch}
      startAdornment={
        <InputAdornment position="start">
          <IconButton size="small" sx={{ color: color }}>
            <img src="./assets/navbar/search.svg" alt="search" />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
