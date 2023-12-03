import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    }
    getData();
  }, []);
  return (
    <>
      {users.map((item, index) => (
        <div key={index}>{JSON.stringify(item)}</div>
      ))}
    </>
  );
};
export default FetchData;
