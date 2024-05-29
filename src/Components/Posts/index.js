import React from 'react';

const Posts = ({ data, callAPIData }) => {
  console.log('props', data);
  return (
    <>
      {data && data.length > 0 ? (
        data.map((post, index) => {
          return (
            <div key={`${index}-post`}>
              <h2>
                {index + 1} - {post.title}
              </h2>
              <p>
                User ID :- <span>{post.userId}</span>
              </p>
            </div>
          );
        })
      ) : (
        <button onClick={callAPIData}>Click</button>
      )}
    </>
  );
};

export default Posts;
