import { Contravention as TContravention } from "../api/contravention/Contravention";

export const CONTRAVENTION_TITLE_FIELD = "id";

export const ContraventionTitle = (record: TContravention): string => {
  return record.id?.toString() || String(record.id);
};
