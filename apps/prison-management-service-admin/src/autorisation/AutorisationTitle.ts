import { Autorisation as TAutorisation } from "../api/autorisation/Autorisation";

export const AUTORISATION_TITLE_FIELD = "id";

export const AutorisationTitle = (record: TAutorisation): string => {
  return record.id?.toString() || String(record.id);
};
