# Netflix Clone

![Netflix Clone](/public/bg.png)

## 🎯 Project Overview

A Netflix clone built with React, Vite, and Tailwind CSS, featuring user authentication, movie streaming, and a responsive design. The application uses TMDB API for movie data and AppWrite for authentication.

## ⚡ Live Demo
[View Live Demo](https://amiya-dass-2004-04-03.netlify.app/) 

## 🚀 Features

- *Authentication*
  - User signup and login with AppWrite
  - Protected routes for authenticated users
  - Error handling for auth flows
  - Auto-fill email functionality

- *Movie Streaming*
  - Dynamic movie banners
  - YouTube trailer integration
  - Genre-based categorization
  - Interactive movie cards

- *User Interface*
  - Responsive Netflix-style design
  - Smooth animations with Framer Motion
  - Swipeable movie carousels
  - FAQ section
  - User dashboard

## 🛠 Tech Stack

- React + Vite
- Tailwind CSS
- AppWrite
- TMDB API
- Additional Libraries:
  - axios
  - framer-motion
  - swiper
  - react-hook-form
  - react-icons

## 📋 Prerequisites

- Node.js (version 14 or above)
- npm/yarn
- AppWrite account
- TMDB API key

## 🔧 Installation

1. Clone the repository
bash
git clone https://github.com/amiyadas01/netflix-clone.git


2. Install dependencies
bash
cd netflix-clone
npm install


3. Create a .env file in the root directory
env
VITE_APPWRITE_PROJECT_ID="67aeb85e000ad4d0096f"
VITE_APPWRITE_ENDPOINT=36d8967ac462a21b35bc4efd7cfcbc81
VITE_TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9


4. Start the development server
bash
npm run dev


## 📱 Pages

### Public Pages
- Welcome Page
- Login Page
- Sign Up Page

### Protected Pages
- Dashboard
- Account Page

## 🎨 Key Features Implementation

### Authentication Flow
- AppWrite integration for secure auth
- Private route protection
- Error handling

### Movie Integration
- TMDB API data fetching
- Trailer playback
- Genre categorization

### UI/UX Features
- Framer Motion animations
- Swiper.js carousels
- Responsive design
- Error handling

## 📂 Project Structure


netflix-clone/
├── src/
│   ├── components/
│   ├── pages/
│   ├── appwrite/
│   ├── api/
│   ├── context/
│   ├── utils/
│   └── App.jsx
├── public/
├── .env
└── package.json


## 🔍 Usage

1. Sign up for a new account or log in
2. Browse movies by genre
3. Click on movies to view details and trailers
4. Manage your account through the dashboard

## 👏 Acknowledgments

- TMDB API for movie data
- AppWrite for authentication
- Netflix for design inspiration

## 📧 Contact

Your Name - [your-amiyadas708@gmail.com](mailto:your-amiyadas708@gmail.com)

Project Link: [https://github.com/amiyadas01/netflix-clone](https://github.com/amiyadas01/Netflix-with-react-full-version)
