import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { Search } from "../Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { navbarStyles } from "./index.styles";

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={navbarStyles.appBar}>
        <Toolbar sx={navbarStyles.toolbar}>
          <Typography variant="h5" sx={navbarStyles.title}>
            Payouts
            <Typography sx={navbarStyles.helpText}>
              <IconButton>
                <img src="./assets/navbar/help.svg" alt="" />
              </IconButton>
              How it works
            </Typography>
          </Typography>

          <Search
            {...navbarStyles.search}
            placeholder="Search features, tutorials, etc."
          />

          <Box sx={{ display: { xs: "none", md: "flex", gap: 12 } }}>
            <Button size="large" color="inherit" sx={navbarStyles.iconButton}>
              <img src="./assets/navbar/group.svg" alt="" />
            </Button>
            <Button color="inherit" sx={navbarStyles.iconButton}>
              <ArrowDropDownRoundedIcon fontSize="large" />
            </Button>
          </Box>
          <Box sx={navbarStyles.moreIconButton}>
            <Button
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
