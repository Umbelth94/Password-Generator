# Password Generator

## Description

A simple password generator that prompts the user to enter the desired password length, with some checkboxes that allow them to choose which types of characters they want included in the password.  The user is guaranteed to get at least one of each selected type, and the password will be randomly generated every time the button is pressed.  

This was the first project involving Javascript for the UW Madison bootcamp and it was a nice refresher into working with Javascript again.  It was fun to try and consider various edge cases for getting the prompts to work, and the algorithm ended up being a lot less complicated than I initially thought it was going to be.  I utilized pseudo code at the start of the project to try and break down as much of the algorithm in plain english as I could which really helped me logic out exactly what steps I needed to take to complete the project.  

The original assignment asked to prompt the users for their desired character types for each type.  I felt this was kind of a clunky solution to the problem, but understand that we technically weren't supposed to know much about DOM manipulation at the point that this project is due.  However, because we ARE currently learning about DOM manipulation, I wanted to go the extra mile and try and improve the user experience by having them select their desired character types using checkboxes instead.  This technically goes against exactly what the project was asking for, so I've left the previous code that dealt with the prompts noted out in the JS file (Lines 53-56) to prove that I knew how to do that originally.  I hope that this is satisfactory enough for the grading criteria.


## Usage

Via the checkboxes, simply select which character types you want included in the password, and hit the "Generate Password" button.  It will prompt you to enter how many characters you want added to the password, and generate it for you.  Typing anything other than a number will not work, but feel free to try!  

## Credits

The starter code for this project came pre-built with the HTML and CSS for the project, although I did add the checkboxes section myself. The JS file already included the event listener and handler for the button.  The original repo can be found [here](https://github.com/coding-boot-camp/friendly-parakeet)


