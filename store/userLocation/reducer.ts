import { userLocationDataType } from "../../data/dataTypes";
import { actionTypes } from "./action";

export const initialState: userLocationDataType = {
  asn: "",
  asnName: "",
  asnOrg: "",
  businessName: "",
  businessWebsite: "",
  city: "",
  continent: "",
  country: "",
  countryCode: "",
  ipName: "",
  ipType: "",
  isp: "",
  lat: 0,
  lon: 0,
  org: "",
  query: "",
  region: "",
  status: "",
  timezone: "",
  utcOffset: "",
};

interface Action {
  type: string;
  location: userLocationDataType;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.SET_USER_LOCATION:
      return {
        ...state,
        ...action.location,
      };
    case actionTypes.CLEAR_USER_LOCATION:
      // console.log(action)
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export default reducer;
