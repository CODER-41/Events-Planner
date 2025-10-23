## Event Planning
A modern, single-page application built with React for planning and managing events. This project demonstrates core React concepts including components, props, state management, and API integratio

## Table of Contents
- [Features]
- [Technologies Used]
- [Installation]
- [Components Overview]
- [Usage Guide]
- [Troubleshooting]
- [Enhancements]
- [License](#license)
- [Authors](#Authors)
- [Contact Information](#contact-information)

## Features

- Single Page Application: Built with React, no page reloads.
- Client-Side Routing: Navigate between  5 different pages seamlessly.
- Event Booking: Controlled form for submitting new event bookings
- RESTful API Integration: GET and POST requests to json-server
- Responsive Design: Modern, mobile-friendly UI with custom styling
- State Management: Efficient state handling across components
- Real-time Updates: UI updates immediately after form submissions

## Technologies used
- React (v18.x) - Frontend library
- React Hooks - useState, useEffect for state management
- JSON Server - Mock RESTful API backend
- CSS3 - Custom styling with CSS-in-JS
- Fetch API - HTTP requests to backend

## Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14.x or higher)
npm (v6.x or higher)
json-server (globally installed)

## Installation
 - Frontend Setup
 Create a new react app
 bash:
    npx create-react-app (my-react)
    cd my-react
- Install dependencies:
    bash:
        npm install
- Backend Setup
    Create a new directory for the setup
    Create a db.json file

## Running the Application
- You'll need two terminal windows - one for the frontend and one for the backend.
- Terminal 1: Start the Backend (JSON Server)
- Terminal 2: Start the Frontend (React App)
##  Components Overview
The application is organized into 6 main components:
1. Navbar Component

Handles navigation between different routes
Displays active page highlighting
Responsive navigation menu

2. Home Component

Hero section with welcome message
Displays featured events from API (first 3 events)
Event cards with key information

3. About Component

Company story and mission statement
Why choose us section
Professional layout with multiple sections

4. Services Component

Grid display of 6 event planning services
Icon-based service cards
Hover effects and animations

5. Form Component (Controlled Form)

Controlled inputs for all form fields
Validates required fields
Makes POST request to json-server
Updates parent state upon successful submission
Success/error messaging
Form reset after submission

6. Contacts Component

Contact information display
Office location 
Email, phone, and address details

## Usage Guide
1. Browse Events: Navigate to Home to see upcoming events
2. Learn More: Visit About to learn about EventMaster
3. View Services: Check Services page for available offerings
4. Book an Event:
    - Click "Book Event" in navigation
    - Fill out the form with event details
    - Submit to add your event
    - View success message and see event added to home page


5. Contact Us: Visit Contacts for business information

## Future Enhancements
 -Integrate external API (e.g., weather API for event planning)
 -Add UPDATE and DELETE operations for events
 -Implement user authentication
 -Add event filtering and search functionality
 -Add calendar view for events
 -Add event categories and tags
 -Create admin dashboard
## [License](LICENSE)

MIT License
Copyright (c) 2025 SnakePiece Events Kenya
## Authors
- Created as a React learning project demonstrating:

- Component architecture
- Props and state management
- API integration
- Controlled forms
- Client-side routing
 #Esther Kuria
 #Jeremiah Koske
 #Christopher Muchiri
 #Barongo Bruce
 #Ronny Mboya

## Contact Information
* Email : snakepiece41@gmail.com