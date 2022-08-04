
import { signInWithGooglePopup, createUserDocumentFromAuth } 
   from "../utils/firebase/firebase.utils";
// import { async } from "@firebase/util";
// import SignUpForm from '../../components/sign-up/sign-up-form.component'
// import SignInForm from "../sign-in-form/sign-in-form.component";

// const Authentication = () => {
//   // useEffect( async() => {
//   //   const response = await getRedirectResult(auth);

//   //   if (response) {
//   //     const userDocRef = await createUserDocumentFromAuth (response.user);
//   //   }
//   // }, []);
  
//   const logGoogleUser = async () => {
//     const {user} = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth (user);
//   };
  
//     return (
//         <div>
//           <h1> Sign In Page </h1>
//           <SignInForm />
//           <SignUpForm />
//         </div>
//     );
//   };

// export default Authentication;

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";


import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;