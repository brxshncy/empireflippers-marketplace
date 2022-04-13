export interface Monetizations {
  created_at: string;
  discarded_at?: string;
  monetization: string;
  updated_at?: string;
}
export interface EmpireListingModel {
  id: string;
  listing_number: number;
  listing_status: string;
  monetizations: Monetizations[];
  listing_price: number;
  average_monthly_net_profit: number;
  listing_multiple: number;
  seller_interview_link: boolean | null;
}
