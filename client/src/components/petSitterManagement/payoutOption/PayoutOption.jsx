import React from "react";
import coinIcon from "../../../assets/svgs/pet-sitter-management/pet-sitter-coin.svg";
import bankIcon from "../../../assets/svgs/pet-sitter-management/pet-sitter-bank-account.svg";
import arrowIcon from "../../../assets/svgs/pet-sitter-management/pet-sitter-arrow.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const PetSitterPayoutOption = ({ payoutData }) => {
  return (
    <section className="bg-gray-100 px-[40px] pt-[40px] py-[184px] flex flex-col gap-[24px]">
      <header className="flex flex-col items-center gap-[24px] md:flex-row">
        <h3 className="flex flex-1 text-[24px] leading-[32px] font-bold">
          Payout Option
        </h3>
      </header>
      <main>
        <div className="flex gap-[24px] pb-6 font-bold">
          <div className="flex items-center justify-between basis-1/2 h-[76px] p-6 bg-white rounded-2xl">
            <span className="flex gap-2">
              <img src={coinIcon} alt="Total Earning" />
              Total Earning
            </span>
            <span>
              {parseFloat(payoutData.total_amount).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              THB
            </span>
          </div>
          <div className="flex items-center justify-between basis-1/2 h-[76px] p-6 bg-white rounded-2xl">
            <span className="flex gap-2">
              <img src={bankIcon} alt="Bank Account" />
              Bank Account
            </span>
            <span className="flex gap-2 text-[#FF7037]">
              {payoutData.bank_account.bank}{" "}
              {payoutData.bank_account.account_number}
              <Link to="/petsitter/profile">
                <img src={arrowIcon} alt="Profile" />
              </Link>
            </span>
          </div>
        </div>
        <TableContainer
          component={Paper}
          className="!rounded-[20px] !font-bold"
        >
          <Table sx={{ minWidth: 650 }} aria-label="booking table">
            <TableHead>
              <TableRow className="bg-black">
                <TableCell className="!text-white">Date</TableCell>
                <TableCell className="!text-white" align="left">
                  From
                </TableCell>
                <TableCell className="!text-white" align="left">
                  Transaction No.
                </TableCell>
                <TableCell className="!text-white" align="right">
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payoutData.bookings.map((booking) => (
                <TableRow key={booking.transaction_number}>
                  <TableCell>{booking.transaction_date}</TableCell>
                  <TableCell align="left">{booking.petOwnerName}</TableCell>
                  <TableCell align="left">
                    {booking.transaction_number.slice(3, 16)}
                  </TableCell>
                  <TableCell align="right" className="!text-[#1CCD83]">
                    {" "}
                    {parseFloat(booking.amount).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    THB
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </section>
  );
};

export default PetSitterPayoutOption;
