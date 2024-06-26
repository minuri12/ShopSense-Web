import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableComponent = (props) => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "red" }}>
              <TableCell sx={{ width: "20%" }}>No</TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Name
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Popularity
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Sales
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.No}
                </TableCell>
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Popularity}</TableCell>
                <TableCell align="left">{row.Sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
