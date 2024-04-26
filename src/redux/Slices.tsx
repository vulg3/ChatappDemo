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
    name: '',
    phonenumber: '',
    listChat: [],
    birthDate: '',
    status: '',
    avatar: '',
    password: '',
    room: [],
    active:false,
  },
};

const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updatePhone: (state, action) => {
      state.user.phonenumber = action.payload;
    },
    updateBirthDay: (state, action) => {
      state.user.birthDate = action.payload;
    },
    updateEmail: (state, action) => {
      state.user.email = action.payload;
    },
    updateName: (state, action) => {
      state.user.name = action.payload;
    },
    updatePass: (state, action) => {
      state.user.password = action.payload;
    },
    isLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    LoginGoogle: (state, action) => {
      state.LoginGoogle = action.payload;
    },
    LoginFacebook: (state, action) => {
      state.LoginFaceBook = action.payload;
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
