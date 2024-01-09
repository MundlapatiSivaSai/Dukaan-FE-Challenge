import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import {
  Sidebar,
  Navbar,
  SelectComponent,
  CardComponent,
  Search,
  TableComponent,
  ChipComponent,
} from "../../common";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";

export function NishyanDashboard() {
  return (
    // Main Dashboard Container
    <Grid container height={"100vh"} bgcolor={"#FAFAFA"}>
      {/*---- Sidebar ----- */}
      <Grid
        item
        xs={1.75}
        style={{ backgroundColor: "#1E2640", height: "100%" }}
      >
        <Box p={"16px 10px"}>
          <Sidebar />
        </Box>
      </Grid>
      {/*----- Sidebar End ----- */}

      {/*------------------Main Content---------------------- */}
      <Grid item xs={10.25} overflow={"auto"} height={"100vh"}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12} p={4} width={"100%"}>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"space-between"} pb={4}>
              <Typography fontSize={20} fontWeight={500} color={"#000"}>
                Overview
              </Typography>
              <SelectComponent
                options={["This Month", "Last Month", "Last 3 Months"]}
                defaultValue="This Month"
                onChange={(value) => console.log(`Selected value: ${value}`)}
                fullWidth={true}
              />
            </Box>
          </Grid>

          {/* ------Cards Container------- */}
          <Grid container spacing={2}>
            {cardsData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                <CardComponent
                  height={card.height}
                  label={card.label}
                  labelFontSize={16}
                  color={card.color}
                  valueColor={card.valueColor}
                  value={card.value}
                  valueFontSize={32}
                  valueFontWeight={500}
                  bgColor={card.bgColor}
                  borderRadius={2}
                  padding={1.5}
                  payoutTime={card.payoutTime}
                  helpIcon
                  orders={card.orders}
                />
              </Grid>
            ))}
          </Grid>

          <Grid item pt={4} pb={4}>
            <Typography fontWeight={500} color={"#1A181E"} fontSize={20}>
              Transactions | This Month
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={1}>
              <ChipComponent
                label="Payouts (22)"
                backgroundColor="#E6E6E6"
                color="#808080"
              />
              <ChipComponent
                label="Refunds (6)"
                backgroundColor="#146EB4"
                color="#FFF"
              />
            </Stack>
          </Grid>

          <Grid
            container
            bgcolor={"#FFF"}
            boxShadow={"0px 2px 6px 0px rgba(26, 24, 30, 0.04);"}
            p={1.5}
            borderRadius={2}
            mt={3}
          >
            <Grid item xs={12}>
              <Box display={"flex"} justifyContent={"space-between"} pb={1.5}>
                <Search
                  placeholder="Order ID or transaction ID"
                  border="1px solid #D9D9D9"
                  width={248}
                  borderRadius={1}
                  padding="5px 8px"
                  fontSize={14}
                />
                <Box display={'flex'}>
                  <Button
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid #D9D9D9",
                      background: "#FFF",
                      color: "#4D4D4D",
                      textTransform: "none",
                      mr: 1,
                      ml:1
                    }}
                    endIcon={<SwapVertOutlinedIcon />}
                  >
                    Sort
                  </Button>
                  <Button
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid #D9D9D9",
                      background: "#FFF",
                      color: "#4D4D4D",
                      textTransform: "none",
                    }}
                  >
                    <FileDownloadOutlinedIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* -----------Main Table Container--------------- */}
            <Grid item xs={12}>
              <TableComponent orders={orders} />
            </Grid>
            {/* -----------Main Table Container End--------------- */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const cardsData = [
  {
    label: "Next Payout",
    value: "₹ 2,312.23",
    bgColor: "#146EB4",
    color: "#FFF",
    orders: 23,
    height: 154,
    payoutTime: "Today, 04:00PM",
  },
  {
    label: "Amout Pending",
    value: "₹92,312.20",
    bgColor: "#FFF",
    color: "#4D4D4D",
    orders: 13,
    valueColor: "#1A181E",
  },
  {
    label: "Amout Proccessed",
    value: "₹23,92,312.19",
    bgColor: "#FFF",
    color: "#4D4D4D",
    valueColor: "#1A181E",
  },
];

const orders = [
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281208",
    status: "Pending",
    transactionId: "131634495747",
    refundDate: "Yesterday, 3:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281207",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281206",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281205",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281204",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
];
