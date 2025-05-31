-- Patrons that don't have active accounts:
SELECT * FROM patron WHERE membership_status != 'Active';

-- All patrons that have expired membership:
SELECT * FROM patron WHERE membership_expiration_date < '2026-01-01';

-- Names of the books that have more than 5 copies available:
SELECT title FROM book WHERE available_copies > 5;

-- Find a book by part of its title:
SELECT * FROM book WHERE title LIKE 'The Great%';