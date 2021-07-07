import React from 'react';
import ReactDom from 'react-dom';
import './stylesheets/style.css';
import { data } from './data/books';
import Book from './Components/Book';

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
