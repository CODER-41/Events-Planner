# Snakepiece Event House Kenya

Welcome to the official repository for the Snakepiece Event House Kenya web application. This is a full-featured platform designed to streamline the event planning process, offering clients a seamless experience from booking to execution.

## 🚀 Live Demo

*(You can add a link to your live application here once it's deployed.)*

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

#### 🏠 Dashboard Tab
- **Personalized Welcome**: Greets the user by name.
- **Profile Overview**: Displays the user's name, email, and National ID.
- **Event Booking Form**: A comprehensive form to book new events.
- **Your Bookings**: A list of all events booked by the user, showing details and current status.
- **Services Overview**: A grid showcasing all the event services offered by the company.

#### 📅 Booking Hub Tab
- **Step-by-Step Guide**: Clear instructions on how to book an event.
- **Advance Booking Notice**: A friendly (and humorous) reminder for users to book their events at least one week in advance.
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
  - Event Type (with an "Other" option for custom types)
  - Event Date & Location
  - Number of Attendees
  - Budget
  - Contact Information
  - Special Requirements
- **Booking Status**: After booking, the status is set to "Agent will be in touch soon," keeping the user informed.
- **Booking Deletion**: Users can cancel/delete their bookings directly from the dashboard.
- **Confirmation Modals**: The app uses a series of well-designed modals to confirm actions like successful bookings and deletions.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: CSS (with custom properties, Flexbox, and Grid)
- **Routing**: React Router
- **API Server**: `json-server` for mock backend and data persistence.
- **APIs**:
  - OpenWeatherMap API for weather data.
  - TomTom API for traffic data.

## ⚙️ Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/Events-Planner.git
    cd Events-Planner
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up the mock backend:**
    The project uses `json-server` to simulate a backend. The data is stored in `db.json`. To start the server, run:
    ```sh
    npx json-server --watch db.json --port 3001
    ```

4.  **Start the React application:**
    In a new terminal, run the following command:
    ```sh
    npm start
    ```

5.  **Open in your browser:**
    The application will be running at `http://localhost:3000`.

---

*This project was proudly built by Group 4: Esther, Barongo, Christopher, Jeremiah, and Ronny (Team Leader).*