import { createSlice} from '@reduxjs/toolkit';

const initialState = {value:{username:""}};

const userSlice = createSlice({
    name:'redux-toolkit',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout:(state) =>{
            state.value = initialState.value;
        }
    }
})

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;