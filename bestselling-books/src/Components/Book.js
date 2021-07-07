import React from 'react';

const Book = ({ title, author, img }) => {
  const clickHandler = () => {
    alert('Hello World');
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};

export default Book;
