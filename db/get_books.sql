SELECT * FROM books b
JOIN authors_books ON b.id = book_id
WHERE author_id = (SELECT id FROM authors
                    WHERE name = $1);