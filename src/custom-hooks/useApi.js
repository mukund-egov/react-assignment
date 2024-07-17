import axios from "axios";
import { useMutation, useQuery } from "react-query";

function useApi(requestType, link, body) {
  let data, error, isLoading;

  const retrieveData = async () => {
    const response = await axios.get(link);
    return response.data;
  };

  const getQuery = useQuery("infoData", retrieveData);

  const postMutation = useMutation(() => axios.post(link, body));
  const deleteMutation = useMutation(() => axios.delete(link));
  const updateMutation = useMutation(() => axios.put(link, body));

  if (requestType === "get") {
    data = getQuery.data;
    error = getQuery.error;
    isLoading = getQuery.isLoading;
  } else if (requestType === "post") {
    data = postMutation.data;
    error = postMutation.error;
    isLoading = postMutation.isLoading;
  } else if (requestType === "delete") {
    data = deleteMutation.data;
    error = deleteMutation.error;
    isLoading = deleteMutation.isLoading;
  } else if (requestType === "update") {
    data = updateMutation.data;
    error = updateMutation.error;
    isLoading = updateMutation.isLoading;
  } else {
    data = null;
    error = null;
    isLoading = false;
  }

  return {
    data,
    error,
    isLoading,
  };
}

export default useApi;
