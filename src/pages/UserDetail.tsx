import { getSelectedUser } from '../services/apiUsers';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';

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
export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (!id) {
    throw new Response('User id is required', { status: 400 });
  }

  const userDetail = await getSelectedUser(id);
  return userDetail;
}

export default UserDetail;
