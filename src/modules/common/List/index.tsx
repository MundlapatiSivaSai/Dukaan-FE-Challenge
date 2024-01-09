import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { listStyles } from "./index.styles";

type listItemArr = {
  id: number;
  label: string;
  icon: string;
  hoverItem?: boolean;
};

interface ListComponentProps {
  listArray: listItemArr[];
}

export function ListComponent({ listArray }: ListComponentProps) {
  return (
    <List>
      {listArray?.map((item) => (
        <ListItem key={item?.id} disablePadding>
          <ListItemButton
            sx={{
              ...listStyles.listItem,
              background: item.hoverItem
                ? "rgba(255, 255, 255, 0.10)"
                : "inherit",
              borderRadius: item.hoverItem ? "4px" : 0,
              opacity: item.hoverItem ? 1 : 0.8,
            }}
          >
            <ListItemIcon sx={{ minWidth: 24 }}>
              <img src={item?.icon} alt="list-icon" />
            </ListItemIcon>
            <ListItemText color="#fff" sx={{ display: { xs: "none", md:"block" } }}>
              <Typography color="#fff" fontSize={14} fontWeight={500}>
                {item?.label}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
