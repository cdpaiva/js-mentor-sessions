CREATE DATABASE libms;

USE libms;

-- Create the 'authors' table
CREATE TABLE author (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create the 'books' table
CREATE TABLE book (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    author_id INT,
    title VARCHAR(255) NOT NULL,
    ISBN VARCHAR(13) NOT NULL,
    publication_year INT,
    available_copies INT
);

-- Create the 'patrons' table
CREATE TABLE patron (
    patron_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    membership_status VARCHAR(20) NOT NULL,
    membership_expiration_date DATE
);

-- Create the 'checkouts' table
CREATE TABLE checkout (
    checkout_id INT AUTO_INCREMENT PRIMARY KEY,
    patron_id INT,
    book_id INT,
    checkout_date DATE,
    due_date DATE
);