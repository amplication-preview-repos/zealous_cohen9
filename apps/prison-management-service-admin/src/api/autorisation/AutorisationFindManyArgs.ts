import { AutorisationWhereInput } from "./AutorisationWhereInput";
import { AutorisationOrderByInput } from "./AutorisationOrderByInput";

export type AutorisationFindManyArgs = {
  where?: AutorisationWhereInput;
  orderBy?: Array<AutorisationOrderByInput>;
  skip?: number;
  take?: number;
};
