import { GoogleLogout } from 'react-google-login';
import { useGoogleLogout } from 'react-google-login';

const responseGoogle = (res) => {
  console.log(res);
}

const GoogleLogoutBtn = () => {
  return (
      <GoogleLogout 
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Logout'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
}

export default GoogleLogoutBtn;