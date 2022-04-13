import React from "react";
import { EmpireListingModel } from "./../../models/EmpireListingModel";
import { Table, Tag, Space } from "antd";
import { columns } from "./markplace-table-config";

interface MarketPlaceListProps {
  marketplaceLists: EmpireListingModel[];
}
export const MarketPlaceList: React.FC<MarketPlaceListProps> = ({
  marketplaceLists,
}) => {
  return <Table columns={columns} dataSource={marketplaceLists} />;
};
