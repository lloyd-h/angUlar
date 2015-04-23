# angUlar
A simple angularjs application to show a list of artists and a short description of each one of them.

## Installation
Installation is very simple. Following instructions are to install on apache2 web server on Ubuntu.
* Go to web server document root: 
  
  `cd /var/www`
* Create a directory for the application:
  
  `mkdir angUlar`
* Clone the project into the newly created directory: 
  
  `git clone https://github.com/lloyd-h/angUlar.git`

Now it can be accessed at `http://localhost/angUlar/index.html` 

## How to play
The artists list is bound to the search textbox. In order to see the list, type a letter, for example 'a' and the list will be shown. The search results will be filtered based on what you type and the user  also can sort the list by Name and Reknown fields in ascending or descending order. 

In order to see the description of an artist, click on the name. On the description page, user can navigate back and forth between descriptions by clicking back or forward buttons at the top left corner of the page. 

Keep playing! 
