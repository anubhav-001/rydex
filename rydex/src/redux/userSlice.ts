import { createSlice } from '@reduxjs/toolkit'
import { Iuser } from '@/models/user-model'

// Define a type for the slice state
interface IuserState {
  userdata: Iuser | null;
}

// Define the initial state using that type
const initialState: IuserState = {
  userdata:null,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userdata = action.payload
    }
  },
})

export const { setUserData } = userSlice.actions


export default userSlice.reducer