import { useFetchAPI } from './customHook';

const ContainerAPI = () => {
  const { data, errors, isLoading } = useFetchAPI('https://reqres.in/api/users');

  if (errors) {
    return <p>Something wrong</p>;
  }

  return (
    <div>
      {isLoading ? <p>Loading ....</p> : data && data.map((item) => <p>{item.first_name}</p>)}
    </div>
  );
};

export { ContainerAPI };
