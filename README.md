# whatJob - T3A2 - Full Stack Application

Jacob Knight -  CAM022101

Kate Beaumont - Cam022111 

Luke Gunders - 

## WhatJob - Career Advice from Career Professionals!
- Target audience
    The app will cater to students that are in highschool, while also aiming to garner some professionals that would like to
    share their experiences with said students both being the demographic while the main consumer of the content would be the younger demographic
    or people that are wanting to change up their career and want to explore more positions due to even in adulthood you still don't have 
    much available useful collections of information of what jobs consist of

- Purpose
    The purpose of the website is to provide career guidance for those in mainly primary and high school education. With the current state of education
    schools have failed to provide adequate ways to introduce students to the real world careers with much of media glorifying specific positions, while
    many roles that many people may love are unknown to most due to not having anywhere to fully explore the world of jobs with proper explanations of all 
    complexities of each job.
    The content is to be written by way of separate posts by professionals in each field. These post will be sorted through categories to allow ease of access and useability to encourage use and exploration of different avenues. 

- Functionality / features
    To post, a user must register. The registration will be done by way of token Authorization will be along with authentication.

    These posts will identify the obligations in the job as well as this list of sections:
        
        Intro
        Day to day
        Career path
        Expected salary
        Difficulty level
        Reliability
        Work/life Balance
        Deep dive click through
        Rating

    These posts will be organized by way of categories. The categories will be drawn from other job search websites.
    The posts can be up-voted and down-voted by logged in users, ordering by way of most up-voted post to show those seeking information about a particular occupation the most relevant posts.
    There will also be a report feature to send a message to the website administrator for posts which will enable reporting by logged in users.

- Tech stack
    
    React
    
    Ruby on rails
    
    Postgresql
    
    Devise
    
    Heroku
    
    AWS S3 image hosting

    Will be refined

R2	Dataflow Diagram
    link here

R3	Application Architecture Diagram
    link here

R4	User Stories
    link here

R5	Wireframes for multiple standard screen sizes, created using industry standard software
    link here

R6	Screenshots of your Trello board throughout the duration of the project
    link to each screen shot


* Using Pull Requests
* Focus on a few core features
    * Sign in/sign up/sign out
    * CRUD
        * Create
        * Update
        * Read
        * Delete
    * Something else
* Do the full SDLC
    * Getting the requirements right
        * Absolute minimum to achieve the purpose
        * No nice to haves
    * Listing your assumptions
        * i.e. %95 of our users will access via a Android mobile device
        * We have to support IE11 because one important client has it in their SOE
    * Acceptance Criteria (Might be the scenarios at the end of Part II)
* Tech Stack
    * Example
        * RoR API backend
        * React frontend
        * Postgresql DB
    * What details we need
        * Versions of the software Ruby version, JS version, DB version
        * "dependencies": {
            "@testing-library/jest-dom": "^5.16.1",
            "@testing-library/react": "^12.1.2",
            "@testing-library/user-event": "^13.5.0",
            "react": "^17.0.2",
            "react-dom": "^17.0.2",
            "react-scripts": "5.0.0",
            "web-vitals": "^2.1.4"
            ruby '2.6.9'
            gem 'rails', '~> 6.0.4', '>= 6.0.4.4'
            javascript -v v8.10.0
            },  
    
    * Supported browsers
        * Latest version of chrome (list the baseline version)
    * High level hosting
        * Heroku
        * AWS
        * Containerize


Use scenarios like this (non implementation specific):
Scenario Admin user adds new job description 
Given I am an admin user
When I add a new job description in the WYSIWYG
And I save the description
Then it will be saved into the system



Use fibonacci 1, 2, 3, 5, 8, 13, 21, 35
