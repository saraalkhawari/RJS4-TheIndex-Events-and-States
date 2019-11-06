import React from "react";
import BookRow from "./BookRow";

function AuthorDetail(props) {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;
  const bookList = author.books.map(book => (
    <BookRow authorName={authorName} book={book} key={authorName} />
  ));
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{authorName}</h3>
        <img src={author.imageUrl} className="img-thumbnail" alt={authorName} />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </div>
  );
}
export default AuthorDetail;
