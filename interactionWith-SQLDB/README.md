## Database Interaction Web Application Documentation

## Introduction

This documentation provides an overview of a web application that interacts with a MySQL database using PHP to perform CRUD (Create, Read, Update, Delete) operations and table management. The application includes various buttons for performing these operations.

Table of Contents
HTML Structure

Description of the HTML structure and elements used in the application.
Client-Side JavaScript

Explanation of the client-side JavaScript functions for making HTTP requests to the server.
Server-Side PHP

Details about the server-side PHP scripts responsible for processing database operations.
MySQL Database

Information about the MySQL database and its tables.
Usage Instructions

Instructions for using the Database Interaction web application.

## HTML Structure

The HTML structure of the web application is defined as follows:

<!DOCTYPE html>: Declaration of the HTML document type.

<html>: The root HTML element.

<head>: The document head containing metadata, script links, and stylesheets.

<title>: Specifies the title of the webpage.
<script>: Links to JavaScript files, including client.js and main.js.
<link rel="stylesheet">: Links to an external CSS file for styling.
<body>: The main content of the web page.

<div class="container">: A container div for the entire application.
<h1>: Displays the title of the application.
Buttons and input fields for performing various database operations.
<div id="responseContainer">: Container for displaying database responses.

## Client-Side JavaScript

Client-side JavaScript code is responsible for handling user interactions and making HTTP requests to the server:

Functions such as insert(), del(), update(), createTable(), view(), viewall(), and drop() are defined to handle different database operations.
Each function sends a POST request to the server with relevant data.
The responses received from the server are logged to the console for debugging.

## Server-Side PHP

Server-side PHP scripts are responsible for processing HTTP requests, interacting with the MySQL database, and sending responses back to the client:

PHP scripts include insert.php, delete.php, update.php, createTable.php, view.php, viewall.php, and drop.php, each corresponding to a specific operation.
Scripts decode JSON data from the HTTP request and execute MySQL queries accordingly.
Appropriate error handling and response messages are provided.

## MySQL Database

The application interacts with a MySQL database named "Guest3_DB." It includes the following tables:

Users: A table with columns id, firstname, and lastname. It is created and used for storing user data.

## Usage Instructions

To use the Database Interaction web application:

Open the webpage in a web browser.
Various buttons for database operations are displayed.
Perform the following operations:
Insert: Add a new user by providing a first name, last name, and 9-digit ID.
Delete: Remove a user by providing their 9-digit ID.
Update: Update a user's first name and last name by providing the new values and their 9-digit ID.
Create Table: Create a new table in the database by specifying a table name and a field name.
View Table Content: View the content of the "Users" table or hide it.
All Table Names: View all table names in the database or hide them.
Drop Table: Delete a table by providing its name.
The responses from the server, including success messages or error messages, are displayed in the "responseContainer."
