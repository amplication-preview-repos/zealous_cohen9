import { Detenu as TDetenu } from "../api/detenu/Detenu";

export const DETENU_TITLE_FIELD = "id";

export const DetenuTitle = (record: TDetenu): string => {
  return record.id?.toString() || String(record.id);
};
