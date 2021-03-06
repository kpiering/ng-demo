import { EtsyImages } from "app/etsy/images";

export type EtsyListing = {
  Images: EtsyImages[],
  listing_id: number,
  state: string,
  user_id: number,
  category_id: number,
  title: string,
  description: string,
  creation_tsz: number,
  ending_tsz: number,
  original_creation_tsz: number,
  last_modified_tsz: number,
  price: string, //Etsy has this as a string and not a number. Unsure why since it did not include the currency or anything.
  currency_code: string,
  quantity: number,
  tags: string[],
  category_path: string[],
  category_path_ids: number[],
  materials: string[],
  shop_section_id: number,
  featured_rank: number,
  state_tsz: number,
  url: string,
  views: number,
  num_favorers: number,
  shipping_template_id: number,
  processing_min: number,
  processing_max: number,
  who_made: string,
  is_supply: string, //convert to boolean?
  when_made: string,
  item_weight: string, //Again with string that should be number
  item_weight_units: string, //came up as null is in oz, maybe look into if needed?
  item_length: string, //String that should be number
  item_width: string, //String that should be number
  item_height: string, //String that should be number
  item_dimensions_unit: string,
  is_private: boolean,
  recipient: string,
  occasion: null,
  style: string[],
  non_taxable: boolean,
  is_customizable: boolean,
  is_digital: boolean,
  file_data: string,
  language: string,
  has_variations: boolean,
  taxonomy_id: number,
  taxonomy_path: string[],
  used_manufacturer: boolean,
};
