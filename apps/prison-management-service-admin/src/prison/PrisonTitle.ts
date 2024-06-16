import { Prison as TPrison } from "../api/prison/Prison";

export const PRISON_TITLE_FIELD = "id";

export const PrisonTitle = (record: TPrison): string => {
  return record.id?.toString() || String(record.id);
};
