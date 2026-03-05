import { useNavigate, useRouteError } from 'react-router-dom';
import error from '../images/404.jpeg';

const Error = () => {
  const navigate = useNavigate();
  const routeError = useRouteError() as { data?: string; message?: string };
  console.log(routeError);

  return (
    <div className='errorWrapper'>
      <img className='error' src={error} alt='error' />
      <p>{routeError.data || routeError.message}</p>
      <button onClick={() => navigate(-1)}>&larr;Back</button>
    </div>
  );
};

export default Error;
