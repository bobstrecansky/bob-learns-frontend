import './App.css';
import axios from 'axios';

const  user = {
  const getUser = () => {
    return axios
      .get(`http://localhost:8080/bob`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  getUser();
};

export default function App() {
  return (
    <div className="content">
      <h1>Bob's Book Reviews</h1>
      <p>Let's check this out</p>
      getUser();
      {/*<img*/}
      {/*  className="avatar"*/}
      {/*  src={user.avatar}*/}
      {/*  alt={'Photo of ' + user.name}*/}
      {/*  style={{*/}
      {/*    width: user.imageSize,*/}
      {/*    height: user.imageSize,*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
}
