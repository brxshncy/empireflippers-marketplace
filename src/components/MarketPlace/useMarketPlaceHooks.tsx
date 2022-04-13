import React, { useEffect, useState } from "react";
import axios from "axios";
import { EMPIRE_PUBLIC_API } from "./../../config/empire-flippers/emp-public-api";
import { EmpireListingModel } from "./../../models/EmpireListingModel";

interface searchParam {
  listing_number: number | string;
}
export const useMarketPlaceHooks = () => {
  const [marketplaceLists, setMarketPlaceLists] = useState<
    EmpireListingModel[]
  >([]);

  const [searchParam, setSearchParam] = useState<searchParam>({
    listing_number: "",
  });

  const [isApiLoading, setIsApiLoading] = useState<boolean>(false);

  const fetchMarketplaceLists = async () => {
    setIsApiLoading((isApiLoading) => !isApiLoading);

    try {
      const { data } = await axios.get(EMPIRE_PUBLIC_API, {
        params: searchParam,
      });
      console.log("data", data);
      setIsApiLoading((isApiLoading) => !isApiLoading);
      setMarketPlaceLists(data.data.listings);
    } catch (error) {
      setIsApiLoading((isApiLoading) => !isApiLoading);
      console.log("[error_fetch_market_pace]", error);
    }
  };

  useEffect(() => {
    fetchMarketplaceLists();
  }, [searchParam]);

  return {
    fetchMarketplaceLists,
    marketplaceLists,
    setMarketPlaceLists,
    isApiLoading,
    setSearchParam,
    searchParam,
  };
};
