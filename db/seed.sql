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

--COVERS
ALTER TABLE books
ADD COLUMN cover TEXT;

UPDATE books
SET cover = 'https://www.terrypratchettbooks.com/wp-content/uploads/2019/04/thecarpetpeople-pb.jpg'
WHERE id = 1;

UPDATE books
SET cover = 'https://images-na.ssl-images-amazon.com/images/I/51S5cTRZPYL._SX319_BO1,204,203,200_.jpg'
WHERE id = 2;

UPDATE books
SET cover = 'https://prodimage.images-bn.com/pimages/9782226432032_p0_v1_s550x406.jpg'
WHERE id = 3;

UPDATE books
SET cover = 'https://mythoughtsonthebook.files.wordpress.com/2016/05/stardust.jpg?w=656'
WHERE id = 4;