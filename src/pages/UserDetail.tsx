import { getSelectedUser } from '../services/apiUsers';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
  const xc = useLoaderData();
  console.log(xc);
  return (
    <div>
      <h3>{xc.data.first_name + ' ' + xc.data.last_name}</h3>
      <img src={xc.data.avatar} alt='avatar' />
      <p>{xc.data.email}</p>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: { params: { id: string } }) => {
  const userDetail = await getSelectedUser(params.id);
  return userDetail;
};

export default UserDetail;
