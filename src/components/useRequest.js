import axios from 'axios';

const useRequest = () => {
    const fetchUsers = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        )
        console.log(response);
        console.log(response.data);
        return response.data;
    }

    const login = async (data) => {
      const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts", data
      )
      return response.data;
    }

    const postForm = async (data) => {
      const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts", data
      )
      return response.data;
    }

  return {
    fetchUsers,
    login,
    postForm
  }
}

export default useRequest