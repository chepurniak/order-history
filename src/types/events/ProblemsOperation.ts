export interface PROBLEMS_OPERATION {
  Id?: number | null;
  ProcessParentId?: number | null;
  FinishTime?: string | null;
  StartTime?: string | null;
  Details?: DETAILS | null;
  User?: string | null;
  LastActionTime?: string | null;
}

interface DETAILS {
  CreationReason?: string | null;
  Department?: string | null;
  Note?: string | null;
}
