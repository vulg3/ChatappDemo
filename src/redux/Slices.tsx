import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isLoading: false,
  LoginGoogle: false,
  LoginFaceBook: false,

  user: {
    _id: '1',
    _idUser: '1',
    email: 'vulehailong2001@gmail.com',
    userName: 'vu Long',
    avatar:
      'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/329926999_619168540016905_551067399906215730_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFW1cBCRU53it9HbKIoz5jGcsWFILMIqWtyxYUgswipa9in5Y3su1hMlUn-9xn3ISJLT4EmXNy05-rLIU0W3e2S&_nc_ohc=JRho-e4kx0MAX-sMfWH&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCh7GFLHHLdMvAvA4acIu1uE7PGeS_ARly56kVVUaQo1Q&oe=658F8EA9',
    gender: '',
    birthDay: '',
    phone: '0355951656',
    password: '1',
    status: 'some thing',
    isOnline: '1',
    listMessage: [],
    tempImage: [],
  },
};

const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    updateTempImage: (state, action) => {
      const value = action.payload;
      state.user.tempImage = value;
    },
    updateUser: (state, action) => {
      const value = action.payload;
      state.user = value;
    },
    updateGender: (state, action) => {
      const value = action.payload;
      state.user.gender = value;
    },
    updatePhone: (state, action) => {
      const value = action.payload;
      state.user.phone = value;
    },
    updateBirthDay: (state, action) => {
      const value = action.payload;
      state.user.birthDay = value;
    },
    updateEmail: (state, action) => {
      const value = action.payload;
      state.user.email = value;
    },
    updateName: (state, action) => {
      const value = action.payload;
      state.user.userName = value;
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
  updateGender,
  updatePhone,
  updateBirthDay,
  updateEmail,
  updateName,
  updatePass,
} = Slice.actions;
export default Slice.reducer;
