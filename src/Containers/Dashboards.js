import React from "react";
import RevenueChart from "../components/RevenueChart";
import DailySalesChart from "../components/DailySalesChart";
import AccountInfo from "../components/AccountInfo";
import RecentOrders from "../components/RecentOrders";

export default function Dashboards() {
  return (
    <>
      <RevenueChart />
      <br />
      <DailySalesChart />
      <br />
      <AccountInfo />
      <br />
      <RecentOrders />
    </>
  );
}
