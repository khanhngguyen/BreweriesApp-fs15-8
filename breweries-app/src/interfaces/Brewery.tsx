interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1?: string | null;
  address_2?: string | null;
  address_3?: null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude?: string | null;
  latitude?: string | null;
  phone?: string | null;
  website_url?: string | null;
  state: string;
  street?: string | null;
}

export default Brewery