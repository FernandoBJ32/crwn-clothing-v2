
import { signInWithGooglePopup, createUserDocumentFromAuth } 
   from "../../routes/utils/firebase/firebase.utils";
// import { async } from "@firebase/util";
import SignUpForm from "../sign-up/sign-pu-form.component";

const SignIn = () => {
  // useEffect( async() => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth (response.user);
  //   }
  // }, []);
  
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth (user);
  };
  
    return (
        <div>
          <h1> Sign In Page</h1>
          <button onClick={logGoogleUser}> Sign in with Google Popup </button>
          {/* <button onClick={logGoogleRedirectUser}> Sign in with Google redirect </button> */}
          <SignUpForm />
        </div>
    );
  };

export default SignIn;