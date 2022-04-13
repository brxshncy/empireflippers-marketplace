import React from "react";
import { useMarketPlaceHooks } from "./useMarketPlaceHooks";
import { Layout, Input, Row, Col, Button } from "antd";
import { MarketPlaceList } from "./../MarketPlaceList/MarketPlaceList";

export const MarketPlace = () => {
  const {
    fetchMarketplaceLists,
    marketplaceLists,
    isApiLoading,
    setSearchParam,
    searchParam,
  } = useMarketPlaceHooks();

  const { Header, Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Marketplace Listings
        </h1>
      </Header>
      <Content style={{ margin: "20px 40px" }}>
        <Row style={{ marginBottom: 20 }}>
          <Col span={6}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                type={"text"}
                placeholder={"Search Listing #"}
                onChange={(e) => {
                  setSearchParam({
                    ...searchParam,
                    listing_number: e.target.value,
                  });
                }}
                value={searchParam.listing_number}
              />
            </div>
          </Col>
          <Col></Col>
        </Row>
        <MarketPlaceList marketplaceLists={marketplaceLists} />
      </Content>
    </Layout>
  );
};
