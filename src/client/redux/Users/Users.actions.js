export const STORE_USER_DATA = "STORE_USER_DATA";

export const storeUser = (payload) => ({
  type: STORE_USER_DATA,
  payload,
});
