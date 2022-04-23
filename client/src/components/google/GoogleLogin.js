import { GoogleLogin } from 'react-google-login';

const responseGoogle = (res) => {
  console.log(res);
}

const GoogleLoginBtn = () => {
  return (
    <GoogleLogin 
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText='Login'
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
  );
}

export default GoogleLoginBtn;