#TODO:
This page features a gallery of collected images from the internet that have been curated and displayed for your convenience.
The gallary is arranged like divided window panels with a top and bottom caption to describe each image. 

##Number and name of feature: #1: Display images 

##Estimate of time needed to complete: 3-4 hours

##Start times: 7/17 8:05pm; 7/18 11:30am; 12:20pm

##Finish times: 717 8:12pm; 7/18 12:16am; 2:56pm

##Actual time needed to complete: 3hrs and 29min

#301-lab-02

## How are we implementing it?
Feature #2: Filter images
Why are we implementing this feature?
As a user, I want to be able to filter the images so that I can view only images that match a keyword.
What are we going to implement?
Given that a user clicks on the dropdown menu
When the user selects one of the options
Then only the images whose keyword matches the option should be displayed

## How are we implementing it?
Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.
Feature #3: Style the application
Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
What are we going to implement?
Given that a user opens the application in the browser
When the user navigates to the home page
Then the images should be displayed in rows across the screen

## How are we implementing it?
Style your application using floats.
Utilize at least one Google font.
Stretch Goal: Sort the images
Why are we implementing this feature?
As a user, I want to be able to sort the images so there is an order to how they render.
What are we going to implement?
Given that a user is presented with sort options
When the user clicks on one option
Then the images should be sorted accordingly

## How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.
Submission Instructions
Complete your Feature Tasks for the day
Create a Pull Request (PR) back to the master branch of your repository
On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
A question within the context of today's lab assignment
An observation about the lab assignment, or related 'Ah-hah!' moment
How long you spent working on this assignment