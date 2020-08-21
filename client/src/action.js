export const requestAllData = () => {
  return { type: "REQUEST_ALL_DATA" };
};

export const receiveAllData = (data) => {
  return { type: "RECEIVE_DATA_SUCCESS", data };
};

export const receiveDataError = (err) => {
  return { type: "RECEIVE_DATA_ERROR", err };
};
