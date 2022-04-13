import { Monetizations } from "./../../models/EmpireListingModel";

export const columns = [
  {
    title: "Listing",
    dataIndex: "listing_number",
  },
  {
    title: "Status",
    dataIndex: "listing_status",
  },
  {
    title: "Monetization",
    dataIndex: "monetizations",
    render: (monetizations: any) => (
      <ul>
        {monetizations.map((mon: Monetizations) => {
          return <li key={mon.created_at}>{mon.monetization}</li>;
        })}
      </ul>
    ),
  },
  {
    title: "Price",
    dataIndex: "listing_price",
  },
  {
    title: "Monthy Net Profit",
    dataIndex: "average_monthly_net_profit",
  },
  {
    title: "Multiple",
    dataIndex: "listing_multiple",
  },
  {
    title: "Seller Interview",
    dataIndex: "seller_interview_link",
  },
];
