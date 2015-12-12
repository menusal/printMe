
# jQuery PrintMe


Yes! Another jQuery plugin for print any page element

PrintMe is a lightweight Plugin to print any html element.


# Why PrintMe?


I'm bored and a plugin was born. It is the story of my life. I'm bored, plugin, again and again ...

# Usage


## Step 1  Include your Javascript


printMe is a jQuery plugin, so you gotta have that first:

	A jQuery base script: src"//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"

Then, just include jqueryprintme.js, wherever it lives on your server:

	A printMe script: src"path_to/jqueryprintme.js"

## Step 2  PrintMe!


Now you can print any element.

# Here are a few examples:

## Basic:


$("#example").printMe();

## With external css styles, add all stylesheets you can need in the array


$("#example").printMe({ "path": ["path_to/external.css","path_to/external2.css"] });

## With title


$("#example").printMe({ "title": "The title" });

# Options

	path: Array with a external css file location
	title: The document header title

# Examples

Some examples [here](http://www.daniarlandis.es/printMe/)

# About


PrintMe has been developped by Daniel Arlandis @menusal


That's about all there is to know! Happy printing! If you find any 
interesting uses for this little library, please let me know! 
Issues and Pull Requests are more than welcome! 

If you have any questions, drop me a line at: daniarlandis@gmail.com