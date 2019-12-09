--CREATE TABLES
CREATE TABLE authors
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE books
(
    id SERIAL PRIMARY KEY, 
    title VARCHAR
 );

 --DUMMY DATA
INSERT INTO authors (name)
VALUES ('Terry Pratchett'), 
('Neil Gaiman');

INSERT INTO books (title)
VALUES ('Good Omens'), 
('The Carpet People'), 
('Coraline'), 
('Stardust');

--AUTHORS_BOOKS

CREATE TABLE authors_books (
 id SERIAL PRIMARY KEY,
 author_id INT REFERENCES authors,
 book_id INT REFERENCES books
);

INSERT INTO authors_books (author_id, book_id)
VALUES (1, 1),
(2, 1), 
(2, 2), 
(1, 3), 
(1, 4);