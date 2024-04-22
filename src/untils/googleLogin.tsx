// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import { useDispatch } from "react-redux";
// import { isLoading } from "../redux/Slices";



// const dispatch = useDispatch();

  
// GoogleSignin.configure({
//   webClientId: '928635624624-vjkmkm1tl3jj6hb2nsaaaaa2229c5g34.apps.googleusercontent.com',
// });

// async function GoogleSigninButton() {
//   try {
//     dispatch(isLoading(true));

//   } catch (error) {
//     dispatch(isLoading(false));
//     console.log('Login failed');
//   }
// }


// const signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     this.setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };