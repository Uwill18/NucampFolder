import CAMPSITES from "../../app/shared/CAMPSITES";
import createSlice from '@reduxjs/toolkit'


const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;


export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

/**the inner arrow function (the one with the parameter of state)
 *has access to both the state parameter and the id parameter from its parent scope. */
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

