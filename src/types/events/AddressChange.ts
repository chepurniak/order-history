export interface ADDRESS_CHANGE {
  NewAddress?: ADDRESS | null;
  OldAddress?: ADDRESS | null;
  ChangeReason?: string | null;
}

export interface ADDRESS {
  Title?: string | null;
  Addition?: string | null;
  Name1?: string | null;
  Name2?: string | null;
  Road?: string | null;
  Postcode?: string | null;
  City?: string | null;
  District?: string | null;
  Country?: string | null;
  Email?: string | null;
  Telefon?: string | null;
}
