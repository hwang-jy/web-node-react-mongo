import { GoogleLogin } from 'react-google-login';
//import { useGoogleLogin } from 'react-google-login';

const responseGoogle = (res) => {
  console.log(res);
}

const onGoogleLoginSuccess = (res) => {
  const params = new URLSearchParams();
  params.append("tokenId", res.tokenId);
}

const GoogleLoginBtn = () => {
  return (
      <GoogleLogin 
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Login with Google'
      onSuccess={onGoogleLoginSuccess}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
}

export default GoogleLoginBtn;