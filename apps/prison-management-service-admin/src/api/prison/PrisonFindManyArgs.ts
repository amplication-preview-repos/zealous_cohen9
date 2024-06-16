import { PrisonWhereInput } from "./PrisonWhereInput";
import { PrisonOrderByInput } from "./PrisonOrderByInput";

export type PrisonFindManyArgs = {
  where?: PrisonWhereInput;
  orderBy?: Array<PrisonOrderByInput>;
  skip?: number;
  take?: number;
};
