import { ListComponent } from "../List";
import { CardComponent } from "../Card";
import { Box, Link, Typography, IconButton } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const SidebarArr = [
  {
    id: 1,
    label: "Home",
    icon: "./assets/sidebar/home.svg",
  },
  {
    id: 2,
    label: "Orders",
    icon: "./assets/sidebar/orders.svg",
  },
  {
    id: 3,
    label: "Products",
    icon: "./assets/sidebar/products.svg",
  },
  {
    id: 4,
    label: "Delivery",
    icon: "./assets/sidebar/delivery.svg",
  },
  {
    id: 5,
    label: "Marketing",
    icon: "./assets/sidebar/marketing.svg",
  },
  {
    id: 6,
    label: "Analytics",
    icon: "./assets/sidebar/analytics.svg",
  },
  {
    id: 7,
    label: "Payouts",
    icon: "./assets/sidebar/payouts.svg",
    hoverItem: true,
  },
  {
    id: 8,
    label: "Discounts",
    icon: "./assets/sidebar/discounts.svg",
  },
  {
    id: 9,
    label: "Audiences",
    icon: "./assets/sidebar/audience.svg",
  },
  {
    id: 10,
    label: "Appearences",
    icon: "./assets/sidebar/appearence.svg",
  },
  {
    id: 11,
    label: "Plugins",
    icon: "./assets/sidebar/plugins.svg",
  },
];

export function Sidebar() {
  return (
    <Box display={"flex"} flexDirection={"column"} minHeight={"95.5vh"}>
      <Box display="flex" justifyContent="space-between" p={1}>
        <Box
          display={"flex"}
          gap={"12px"}
          flexDirection={{ md: "row", xs: "column" }}
        >
          <img src="./assets/logo.png" width={39} alt="logo" />
          <Box>
            <Typography color={"#FFF"}>Nishyan</Typography>
            <Link href="#" underline="always" color="#fff">
              <Typography sx={{ opacity: "0.8" }}>Visit store</Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <ExpandMoreRoundedIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>

      <Box style={{ flex: 1 }}>
        <ListComponent listArray={SidebarArr} />
      </Box>

      <Box mt="auto">
        <CardComponent
          width={192}
          height={54}
          label="Available credits"
          labelFontSize={13}
          labelOpacity={0.8}
          color="#fff"
          value="222.10"
          valueFontSize={16}
          bgColor="#353C53"
          preIcon="./assets/sidebar/wallet.svg"
        />
      </Box>
    </Box>
  );
}
