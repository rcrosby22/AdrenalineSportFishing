import FacebookIcon from '@mui/icons-material/Facebook';

const FacebookButton = () => {
  const handleButtonClick = () => {
    // Redirect to your dad's Facebook business page
    window.location.href = "https://www.facebook.com/p/Adrenaline-Sport-Fishing-100076291122537/";
  };

  return (
    <button onClick={handleButtonClick}>
    <FacebookIcon />
    Visit Facebook Page
  </button>
  );
};

export default FacebookButton;
