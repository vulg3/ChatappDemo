import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isLoading: false,
  LoginGoogle: false,
  LoginFaceBook: false,

  user: {
    _id: '',
    _idUser: '',
    email: '',
    name:'',
    phonenumber: '',
    listChat: [],
    birthDate: '',
    avatar: '',
    password:'',
    room:[],
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
    updatePhone: (state, action) => {
      const value = action.payload;
      state.user.phonenumber = value;
    },
    updateBirthDay: (state, action) => {
      const value = action.payload;
      state.user.birthDate = value;
    },
    updateEmail: (state, action) => {
      const value = action.payload;
      state.user.email = value;
    },
    updateName: (state, action) => {
      const value = action.payload;
      state.user.name = value;
    },
    updatePass: (state, action) => {
      const value = action.payload;
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
export const {
  updateUser,
  isLogin,
  isLoading,
  LoginFacebook,
  LoginGoogle,
  updatePhone,
  updateBirthDay,
  updateEmail,
  updateName,
  updatePass,
} = Slice.actions;
export default Slice.reducer;
