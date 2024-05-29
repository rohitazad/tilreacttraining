import React, { useState, useEffect } from 'react';
import Posts from '../../Components/Posts';
import { GETAPIData } from '../../Utils/common';

const HomePage = () => {
  const [postData, setPostData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    const postAPIData = await GETAPIData({
      url: 'https://jsonplaceholder.typicode.com/posts',
    });
    console.log(postAPIData);
    //setPostData(postAPIData);
  };
  const countValueChangeHandler = () => {
    setCount(count + 1);
  };
  const callAPIData = () => {
    getData();
  };
  useEffect(() => {
    console.log('count value change useEffect ', count);
    getData();
  }, []);

  useEffect(() => {
    console.log('count value change ', count);
  }, [count]);
  return (
    <>
      <div className="wraper">
        <h1>Hello Home page {count}</h1>
        <button onClick={countValueChangeHandler}>Count Change Value</button>
        <Posts data={postData} callAPIData={callAPIData} />
      </div>
    </>
  );
};

export default HomePage;
