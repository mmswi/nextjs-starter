import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';

export const ProfileSlice = createSlice({
  name: 'profile',

  initialState: {
    name: null
  },

  reducers: {
    setProfileData: (state, action) => {
      state.name = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);

      if (!action.payload.profile.name) {
        return state;
      }

      state.name = action.payload.profile.name;
    }
  }
});

export const { setProfileData } = ProfileSlice.actions;

export const selectProfile = (state: AppState) => state.profile;

export const fetchProfile =
    (): AppThunk =>
      async dispatch => {
        const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

        await timeoutPromise(200);

        dispatch(
          setProfileData('name from thunk')
        );
      };


export default ProfileSlice.reducer;