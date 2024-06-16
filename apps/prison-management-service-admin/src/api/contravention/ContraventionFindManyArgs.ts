import { ContraventionWhereInput } from "./ContraventionWhereInput";
import { ContraventionOrderByInput } from "./ContraventionOrderByInput";

export type ContraventionFindManyArgs = {
  where?: ContraventionWhereInput;
  orderBy?: Array<ContraventionOrderByInput>;
  skip?: number;
  take?: number;
};
