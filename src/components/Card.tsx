import { useNavigate } from 'react-router-dom';

interface User {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  id: string;
}

const Card = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const { avatar, email, first_name, last_name, id } = user;

  return (
    <div onClick={() => navigate(`/user/${id}`)} className='cardWrapper'>
      <h3>
        {first_name} {last_name}
      </h3>
      <img src={avatar} alt='avatar' />
      <p>{email}</p>
    </div>
  );
};

export default Card;
