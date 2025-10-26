# Snakepiece Event House Kenya

Welcome to the official repository for the Snakepiece Event House Kenya web application. This is a full-featured platform designed to streamline the event planning process, offering clients a seamless experience from booking to execution.

## 🚀 Live Demo

https://snakepiece-events.onrender.com/

## ✨ Core Functionalities

This web application is packed with features to provide a comprehensive and user-friendly event management experience.

### 1. User Authentication & Account Management
- **Secure Signup & Login**: Users can create a new account with their name, email, and National ID, and log in securely.
- **Persistent Sessions**: User sessions are maintained using `localStorage`, keeping them logged in across browser sessions.
- **Account Deletion**: Users have the option to permanently delete their account and all associated data, with an emotional and user-centric confirmation process.
- **Logout**: A simple one-click logout functionality.

### 2. Interactive Home Page
- **Hero Section**: An engaging introduction with a "Plan Your Event" call-to-action that directs users to WhatsApp for immediate contact.
- **Trusted Partners**: A section showcasing the logos of trusted partner companies.
- **Client Rankings**: Highlights the best-rated services (e.g., MCs, Catering, Luxury Cars) with descriptive cards and images.
- **Integrated Sections**: Includes dedicated "About Us" and "Contact Us" sections for comprehensive information.

### 3. Powerful User Dashboard

The dashboard is the central hub for logged-in users, organized into several tabs for easy navigation.

#### ⚠️ IMPORTANT NOTICE Tab
- **Warning Message**: Informs users that bookings cannot be deleted once confirmed, to maintain record integrity.
- **Contact Link**: Direct link to WhatsApp for changes or modifications.

#### 🏠 Dashboard Tab
- **Personalized Welcome**: Greets the user by name.
- **Profile Overview**: Displays the user's name, email, and National ID (non-editable).
- **Event Booking Form**: A comprehensive form to book new events with validation (future dates only).
- **Your Bookings**: A list of all events booked by the user, showing details and current status.
- **Services Overview**: A grid showcasing all the event services offered by the company with pricing.
- **Team Credits**: Acknowledges the development team.

#### 📅 Booking Hub Tab
- **Step-by-Step Guide**: Clear instructions on how to book an event.
- **Advance Booking Notice**: A humorous reminder for users to book their events at least one week in advance.
- **Full Booking Capabilities**: Includes the event booking form and the user's booking list.

#### 🗣️ What Our Clients Say (Testimonials)
- **Client Feedback**: A visually appealing grid of testimonials from past clients, complete with names, photos, and quotes to build trust.

#### 🌦️ Weather & Traffic Tab
- **Real-time Weather**: Automatically fetches and displays current weather conditions for the user's next upcoming event location using the OpenWeatherMap API.
- **Live Traffic Updates**: Provides real-time traffic status for the Nairobi-Nakuru highway using the TomTom API, helping with travel planning.
- **Actionable Suggestions**: Offers practical advice based on the weather (e.g., "Add tents for rain") and traffic conditions (e.g., "Allow extra travel time").

#### ❓ Need Help? (FAQ)
- **Comprehensive FAQ**: An accordion-style list of frequently asked questions covering booking, services, pricing, and more.
- **Urgent Assistance**: A direct link for users to get immediate help via WhatsApp.

### 4. Event Booking & Management
- **Detailed Booking Form**: Users can specify:
  - Event Type (with an "Other" option for custom types, max 200 characters)
  - Event Date & Location (future dates only, no same-day bookings)
  - Number of Attendees
  - Budget (in KES)
  - Contact Phone Number
  - Event Details & Special Requirements
- **Booking Status**: After booking, the status is set to "Agent will be in touch soon," keeping the user informed.
- **Booking Deletion**: Users can cancel/delete their bookings directly from the dashboard (with confirmation modal).
- **View Booking**: Modal to view booking details (no editing capability).
- **Confirmation Modals**: The app uses well-designed modals to confirm actions like successful bookings, deletions, and account removal.

## 🛠️ Tech Stack

- **Frontend**: React.js (v19.2.0)
- **Styling**: CSS (with custom properties, Flexbox, and Grid)
- **Routing**: React Router DOM (v7.9.4)
- **API Server**: `json-server` for mock backend and data persistence.
- **Icons**: React Icons (v5.5.0) and Font Awesome
- **APIs**:
  - OpenWeatherMap API for weather data.
  - TomTom API for traffic data.
- **Additional Libraries**: Axios for HTTP requests, Concurrently for running multiple scripts.

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   Node.js
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Events-Planner.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd Events-Planner
    ```
3.  **Install NPM packages**:
    ```bash
    npm install
    ```

### Running the Application

You'll need to run two processes in separate terminals: the backend API server and the frontend React application.

1.  **Start the JSON API Server**:
    This command starts the mock backend, watching for changes in the `db.json` file.
    ```bash
    npm run server
    ```
2.  **Start the React App**:
    This command starts the frontend development server on port 3002.
    ```bash
    npm start
    ```

Your application will be available at `http://localhost:3002`, and the API server will be running at `http://localhost:3001`.

### Environment Variables

Create a `.env` file in the root directory and add your API keys:
```
REACT_APP_API_URL=http://localhost:3001
# Add your OpenWeatherMap and TomTom API keys here if needed
```

---

*This project was proudly built by Group 4: Esther, Barongo, Christopher, Jeremiah, and Ronny (Team Leader).*
