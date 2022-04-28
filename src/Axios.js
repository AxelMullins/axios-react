import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
      } catch (error) {
        setErrMsg(error.message);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {!errMsg ? (
        <ul>
          {data.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>{errMsg}</p>
      )}
    </div>
  );
};

export default Axios;