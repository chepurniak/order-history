export interface MANU_EVENT {
  ManuStatus?: string | null;
}

interface Address {
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string | null;
  HouseNumber: string | null;
  Street: string;
  FullStreetLine: string;
  PostId: string | null;
  PackstationId: string | null;
  PostofficeId: string | null;
  ZipCode: string;
  City: string;
  CountryCode: string;
  Email: string;
  Telephone: string;
  LeitcodeAddressPart: string | null;
}

export interface CorrectionData {
  CorrectionApproach: string;
  Address: Address;
}
