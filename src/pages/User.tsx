import { useLoaderData } from 'react-router-dom';
// import { getEveryUser } from '../services/apiUsers';
import Card from '../components/Card';

const User = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className='usersWrapper'>
      <h3>
        {users?.data?.map((user, index) => (
          <Card user={user} key={index} />
        ))}
      </h3>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
// export const loader = async () => {
//   const users = await getEveryUser();
//   return users;
// };

export default User;
