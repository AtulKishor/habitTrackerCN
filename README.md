# Habit Tracker CN

A web application to add new habits, track your habits and monitor your weekly progress.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Pages](#pages)
- [Redux State Management](#redux-state-management)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AtulKishor/habitTrackerCN.git
    ```

2. Navigate into the project directory:
    ```sh
    cd habitTrackerCN
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the application, run:
    ```sh
    npm start
    ```
This will launch the application in development mode.   
Open http://localhost:3000 to view it in your browser.

## Features
 - Add multiple habits to track the status of each habit daily. A user can toggle between the three statuses of a habit:
     - Done - Mark the habit as done for a day
     - Not done - Mark the habit as not done for a day
     - None - User did not take any action on a habit for a day
 - Receive random motivational quotes
 - Responsive design for various screen sizes

### Components
 - Navbar: The navigation bar at the top of the app.
 - HabitList: Displays the list of all habits added by the user.
 - HabitStatus: Shows the detailed weekly status of the selected habit.
 - WeekStatus: Displays the status of habits for the entire week.
 - SingleDayStatus: Represents the status of a habit for a single day.

### Pages
 - Homepage: The main page where users can view and add habits.
 - DetailsPage: Provides detailed information about the status of each habit.
 - Error: Displays error messages for incorrect routes.

### Redux State Management
The application uses Redux for state management. The state includes:

 - habits: List of all habits selected by the user.
 - quote: Random motivational quote.
 - suggestionSelected: Tracks if a user clicked on any habit suggestion.
 - showStatus: Status of the currently selected habit.
 - displayImageUrl: URL of the image displayed on the home page.

#### Actions
 - addHabit: Adds a new habit to the list.
 - setSuggestionSelected: Sets the selected habit suggestion.
 - setShowStatus: Sets the status of the selected habit.
 - toggleHabitStatus: Toggles the status of a habit for a specific day.

## Folder Structure

    src/
    ├── Component/
    │ ├── AddHabit.jsx
    │ ├── HabitList.jsx
    │ ├── HabitListItem.jsx
    │ ├── HabitStatus.jsx
    │ ├── ListItem.jsx
    │ ├── Navbar.jsx
    │ ├── Quote.jsx
    │ ├── SingleDayStatus.jsx
    │ ├── Suggestions.jsx
    │ └── WeekStatus.jsx
    ├── Redux/
    │ └── Reducers/
    │   └── habitReducer.js
    ├── Pages/
    │   ├── Homepage.js
    │   ├── DetailsPage.js
    │   └── Error.js
    │── Data/
    │   ├── SuggestedHabit.js
    │   └── DisplayImage.js
    ├── styles.css
    ├── App.js
    ├── index.css
    ├── index.js
    └──store.js

## Dependencies

@fortawesome/fontawesome-svg-core   
@fortawesome/free-brands-svg-icons   
@fortawesome/free-regular-svg-icons   
@fortawesome/free-solid-svg-icons   
@fortawesome/react-fontawesome   
@reduxjs/toolkit   
react   
react-dom   
react-redux   
react-router-dom   
react-scripts   
react-toastify   
serve   

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Hosted Application
You can view the hosted application [here](https://habit-tracker-cn-gvag.onrender.com/).
