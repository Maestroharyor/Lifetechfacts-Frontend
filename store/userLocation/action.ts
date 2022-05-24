import { userLocationDataType } from "../../data/dataTypes";

export const actionTypes = {
    SET_USER_LOCATION: 'SET_USER_LOCATION',
    CLEAR_USER_LOCATION: 'CLEAR_USER_LOCATION'
    
};

export function setUserLocation(location:userLocationDataType) {
    return { type: actionTypes.SET_USER_LOCATION, location};
}


export function ClearUserLocation(){
    return {type: actionTypes.CLEAR_USER_LOCATION}
}