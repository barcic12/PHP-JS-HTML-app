## Navigation Web Page Documentation

Introduction
This documentation provides an overview of a web page that serves as a navigation interface for accessing different folders within a website. The page allows users to click on buttons to navigate to specific folders.

Table of Contents
HTML Structure

Description of the HTML structure and elements used in the page.
JavaScript Function

Explanation of the JavaScript function for handling navigation.
CSS Styling

Details about the CSS styles applied to the buttons for visual presentation.
Usage Instructions

Instructions for using the Navigation web page.

## HTML Structure

The HTML structure of the web page is defined as follows:

<!DOCTYPE html>: Declaration of the HTML document type.

<html>: The root HTML element.

<head>: The document head containing metadata, script links, and stylesheets.

<title>: Specifies the title of the webpage.
<script>: Links to the main.js JavaScript file.
<link rel="stylesheet">: Links to an external CSS file for styling.
<body>: The main content of the web page.

<div class="container">: A container div for the entire page's content.
<h1>: Displays the title of the page ("Home").
Buttons for navigating to different folders:
"HTTP requests Folder"
"Stopwatch Folder"
"Bonus Folder"

## JavaScript Function

A JavaScript function named goto(url) is defined to handle navigation:

goto(url): This function is triggered when a button is clicked.
It takes a url parameter representing the destination folder.
It sets the window location's href to the specified URL, effectively navigating the user to the selected folder.

## CSS Styling

CSS styles are applied to the buttons to enhance their visual presentation:

Button styles:

Border with a solid line and a color of RGB(6, 23, 255).
Background color of RGB(0, 242, 255).
Fixed width and height.
Padding and margin for spacing.
Cursor style set to "pointer" to indicate interactivity.
Button hover effect:

When hovering over a button, the background color changes to RGB(56, 186, 203), and the text color changes to green.

## Usage Instructions

To use the Navigation web page:

Open the webpage in a web browser.
The page displays a title ("Home") and three buttons.
Click on a button to navigate to the corresponding folder within the website.
"HTTP requests Folder" button navigates to the "http-request" folder.
"Stopwatch Folder" button navigates to the "stopwatch" folder.
"Bonus Folder" button navigates to the "bonus" folder.
When a button is clicked, the goto(url) JavaScript function sets the browser's location to the specified URL, effectively taking the user to the selected folder.
