# AchievePrint

<!-- VIDEO PLACEHOLDER -->
<p align="center">
  <!-- Replace the src below with your actual video file or a YouTube embed link -->
  <video width="720" controls>
    <source src="C:\Users\AARUSHI\Videos\Screen Recordings\Achieve Print.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

## Overview

AchievePrint is a web-based certificate generation platform designed to streamline the process of issuing certificates for course participants. Administrators can upload participant lists via Excel, which are then stored in a MongoDB database. Each participant receives a unique ID, allowing them to securely download their certificate of completion.

### Key Features

- **Admin Dashboard**: Upload Excel files containing participant data.
- **MongoDB Integration**: Participant information is stored securely.
- **Certificate Generation**: Generate and download certificates for registered users.
- **ID-based Access**: Participants use a unique ID (emailed to them after registration) to download their certificate.
- **Modern UI**: Built with React, enhanced with Spline backgrounds.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MongoDB
- **Excel Upload**: multer
- **3D Background**: Spline

## Setup & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AAruhsi/AchievePrint.git
   cd AchievePrint
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the app:**
   - Open your browser and navigate to `http://localhost:3000`.

## How It Works

1. **Admin uploads participants:**  
   Upload an Excel file with participant details through the dashboard. The data is stored in MongoDB.

2. **Participants receive an ID:**  
   After registering for a course, each participant receives an email with their unique ID.

3. **Certificate download:**  
   Participants can use their ID to securely download their certificate of completion.

## Video Demo

Refer to the video at the top of this README for a walkthrough of AchievePrint’s features and flow.

## Acknowledgments

- Built with React, Node.js, MongoDB, and Spline.
- Excel upload functionality
- Inspired by the need for automated, secure certificate distribution.

---

