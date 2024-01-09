import { Link } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { tableStyles } from "./index.styles";

type Order = {
  orderId: string;
  status: string;
  transactionId: string;
  refundDate: string;
  orderAmount: number | string;
};

interface TableComponentProps {
  orders: Order[];
}

export function TableComponent({ orders }: TableComponentProps) {
  return (
    <TableContainer>
      <Table sx={tableStyles.tableCell} aria-label="simple table">
        <TableHead sx={{ background: "#F2F2F2" }}>
          <TableRow>
            <TableCell sx={tableStyles.columnWidth}>Order ID</TableCell>
            <TableCell align="left" sx={tableStyles.columnWidth}>
              Status
            </TableCell>
            <TableCell align="left" sx={tableStyles.columnWidth}>
              Transaction ID
            </TableCell>
            <TableCell align="left" sx={tableStyles.columnWidth}>
              Refund Date
            </TableCell>
            <TableCell align="right" sx={tableStyles.columnWidth}>
              Order Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.orderId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ fontWeight: 500 }} component="th" scope="row">
                <Link color={"#146EB4"} underline={"none"}>
                  {order.orderId}
                </Link>
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 500 }}>
                <CircleRoundedIcon
                  sx={{
                    fontSize: 12,
                    color: order.status == "Successful" ? "#17B31B" : "#999",
                    mr: 1,
                  }}
                />
                {order.status}
              </TableCell>
              <TableCell align="left">{order.transactionId}</TableCell>
              <TableCell align="left">{order.refundDate}</TableCell>
              <TableCell align="right">{order.orderAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
