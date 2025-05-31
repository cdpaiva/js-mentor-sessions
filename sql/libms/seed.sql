INSERT INTO author (first_name, last_name)
VALUES
    ('F. Scott', 'Fitzgerald'),
    ('Harper', 'Lee'),
    ('George', 'Orwell'),
    ('Jane', 'Austen'),
    ('J.D.', 'Salinger');

INSERT INTO book (author_id, title, ISBN, publication_year, available_copies)
VALUES
    (1, 'The Great Gatsby', '978-074327351', 1925, 10),
    (2, 'To Kill a Mockingbird', '978-006112008', 1960, 8),
    (3, '1984', '978-045152493', 1949, 12),
    (4, 'Pride and Prejudice', '978-014143518', 1813, 6),
    (5, 'The Catcher in the Rye', '978-036769488', 1951, 9);

INSERT INTO patron (first_name, last_name, email, membership_status, membership_expiration_date)
VALUES
    ('Alice', 'Johnson', 'alice@example.com', 'Active', '2025-12-13'),
    ('Bob', 'Smith', 'bob@example.com', 'Active', '2025-10-22'),
    ('Charlie', 'Davis', 'charlie@example.com', 'Active', '2026-01-06'),
    ('Eve', 'Wilson', 'eve@example.com', 'Expired', '2023-12-31'),
    ('Frank', 'Brown', 'frank@example.com', 'Active', '2026-02-01');

INSERT INTO checkout (patron_id, book_id, checkout_date, due_date)
VALUES
    (1, 1, '2025-05-15', '2025-06-15'),
    (2, 2, '2025-04-29', '2025-05-31'),
    (3, 3, '2025-05-17', '2025-06-17'),
    (5, 4, '2025-05-18', '2025-06-18'),
    (5, 5, '2025-05-29', '2025-06-29');