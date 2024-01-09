import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Link,
} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

interface cardComponentPops {
  height?: number;
  width?: number;
  bgColor?: string;
  orders?: number;
  payoutTime?: string;
  helpIcon?: boolean;
  borderRadius?: number;
  padding?: number;

  label: string;
  labelFontSize?: number;
  labelfontWeight?: number;
  labelOpacity?: number;
  color: string;

  value: string;
  valueFontSize?: number;
  valueFontWeight?: number;
  valueColor?: string;
  preIcon?: string;
}

export function CardComponent({
  height,
  width,
  bgColor,
  orders,
  payoutTime,
  helpIcon,
  label,
  labelFontSize,
  value,
  valueFontSize,
  valueFontWeight,
  preIcon,
  labelOpacity,
  color,
  borderRadius,
  padding,
  valueColor,
}: cardComponentPops) {
  return (
    <Card
      sx={{
        position: "relative",
        minHeight: height || "auto",
        width: "auto" || width,
        bgcolor: bgColor,
        borderRadius: borderRadius,
        padding: padding,
        flex: 1,
      }}
    >
      <CardContent
        sx={{ padding: "6px 12px!important", width: "100%", flex: 1 }}
      >
        <Box display={"flex"} alignItems={"center"} width={"100%"} gap={1.5}>
          {preIcon && (
            <Box
              bgcolor={"rgba(255, 255, 255, 0.10)"}
              borderRadius={1}
              p={"6px"}
              height={36}
            >
              <img src={preIcon} alt="wallet" height={24} />
            </Box>
          )}

          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            <Typography
              sx={{
                fontSize: labelFontSize,
                opacity: labelOpacity,
                color: color,
                display: "flex",
                alignItems: "center",
              }}
            >
              {label}
              {helpIcon && (
                <IconButton>
                  <img
                    src={
                      bgColor == "#FFF"
                        ? "./assets/navbar/help.svg"
                        : "./assets/navbar/help-white.svg"
                    }
                    alt="help"
                  />
                </IconButton>
              )}
            </Typography>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={{ xs:"column",md: "column", lg: "row" }}
              textAlign={'left'}
            >
              <Typography
                sx={{
                  fontSize: valueFontSize,
                  color: valueColor ? valueColor : color,
                  fontWeight: valueFontWeight,
                }}
                color="text.secondary"
              >
                {value}
              </Typography>

              {orders && (
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: bgColor !== "#FFF" ? "#FFF" : "#146EB4",
                    textDecorationColor:
                      bgColor !== "#FFF" ? "#FFF" : "#146EB4",
                  }}
                >
                  <Typography fontWeight={500}>{orders} orders</Typography>
                  <KeyboardArrowRightRoundedIcon fontSize="medium" />
                </Link>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
      {payoutTime && (
        <Box
          display={"flex"}
          right={0}
          position={"absolute"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"8px 24px"}
          borderRadius={2}
          bgcolor={"#0E4F82"}
          width="100%"
          bottom={0}
        >
          <Typography variant="body2">Next Payout date:</Typography>
          <Typography fontWeight={500} variant="body2">
            {payoutTime}
          </Typography>
        </Box>
      )}
    </Card>
  );
}
