# Food Recipe Blog

Food Recipe Blog is a React-based web application that allows users to share their recipes, view their own recipes, and mark their favorite recipes. Users can log in to the platform, view recipes, and interact with the content.

## Features

- **Home Page**: Displays an overview of the application and a brief introduction to food recipes.
- **Recipe Sharing**: Logged-in users can share their own recipes.
- **My Recipe**: Users can view and manage their own recipes.
- **Favorites**: Users can add recipes to their favorites.
- **Authentication**: Users can log in and log out, with the option to register if not already logged in.
 
## Technologies Used

- **React**: Front-end framework for building the user interface.
- **React Router**: For handling navigation between pages.
- **Local Storage**: Used for managing user authentication (storing tokens and user data).
- **Node,Express**: For building backend API
- **JWT**: For secure authentication using token
- **MongoDB**: Used for manage Database

## Installation

**1. Download project and go to directory:**

       cd Recipe-Management

**2. Setup the backend server**

- Navigate to backend directory : 

      cd backend

- Install dependencies :

      npm install

- Make .env file in backend folder :

      PORT=5000
      MONGO_URL=your_connection_string
      SECRET_KEY=your_secret_key

- start the server

      npm run dev
  
if facing issue to start the server install nodemon or run npm start


**3. Setup the frontend server**

 - Navigate to frontend folder

        cd recipe-app
- Install dependencies :
  
        npm install
- Start the server

          npm run dev




         
