import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    isLoading: false,
    LoginGoogle: false,
    LoginFaceBook: false,
  
    user: {
      _id: '',
      email: '',
      userName: '',
      avatar: '',
      gender: '',
      birthDay: '',
      phone: '',
      password: '',
      status:'',
      activiti: '',
    },
  
  };

  const Slice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {
      updateUser: (state, action) => {
        const value = action.payload;
        state.user = value;
      },
      updateGender: (state, action) => {
        const value = action.payload
        state.user.gender = value;
      },
      updatePhone: (state, action) => {
        const value = action.payload
        state.user.phone = value;
      },
      updateBirthDay: (state, action) => {
        const value = action.payload
        state.user.birthDay = value;
      },
      updateEmail: (state, action) => {
        const value = action.payload
        state.user.email = value;
      },
      updateName: (state, action) => {
        const value = action.payload
        state.user.userName = value;
      },
      updatePass: (state, action) => {
        const value = action.payload
        state.user.password = value;
      },
      isLogin: (state, action) => {
        const value = action.payload;
        state.isLogin = value;
      },
      isLoading: (state, action) => {
        const value = action.payload;
        state.isLoading = value;
      },
      LoginGoogle: (state, action) => {
        console.log('login gg', action.payload);
        const value = action.payload;
        state.LoginGoogle = value;
      },
      LoginFacebook: (state, action) => {
        console.log('login fb', action.payload);
        const value = action.payload;
        state.LoginFaceBook = value;
      },
    },
  
  });
  export const {  updateUser, isLogin, isLoading, LoginFacebook, LoginGoogle, updateGender, updatePhone, updateBirthDay, updateEmail, updateName, updatePass } = Slice.actions
  export default Slice.reducer;
  
