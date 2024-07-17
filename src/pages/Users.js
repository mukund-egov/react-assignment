import React from 'react'
import { useQuery } from 'react-query';
import useRequest from '../components/useRequest';


const Users = () => {
    const { fetchUsers } = useRequest();
    const {
        data: users,
        error,
        isLoading
    } = useQuery("usersData", fetchUsers);

    if (isLoading) return <div>Fetching users...</div>
    if (error) return <div>Error occured: {error.message}</div>

  return (
    <div className='users'>
        <ul>
            {users.map((user) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <p>Username : {user.username}</p>
                        <p>Email : {user.email}</p>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default Users