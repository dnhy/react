import T from "../constant";

export function createAddUserAction(data) {
  return { type: T.ADD_PERSON, data: data };
}
