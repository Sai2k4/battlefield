
# Battlefield 4 Server Info Page

This project is a recreation of the Battlefield 4 Server Info Page using React.js and Node.js. The goal is to mimic the UI and functionality of the server info section, fetching data dynamically via APIs.

---

## Features
- Dynamic display of server information (e.g., players, map, mode).
- Hover and click interactions for UI elements.
- Fully responsive design.
- Battlefield-inspired background.

---

## Screenshot

Below is a preview of the application:

### Full Page
![Battlefield 4 Server Info Page](./assets/images/server-info-full.png)

### Table View
<img src="./assets/images/server-info-table.png" alt="Server Info Table View" width="600">

---

## Installation

### Backend (Node.js)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend (React.js)
1. Navigate to the frontend directory:
   ```bash
   cd battlefield-server-info
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```

---

## API Endpoints

### GET `/api/server-info`
- **Description:** Fetches server information.
- **Response Example:**
   ```json
   {
       "serverName": "RC3-BEAMERS",
       "players": [
           { "name": "Player1", "ping": 34, "score": 100 },
           { "name": "Player2", "ping": 45, "score": 90 }
       ],
       "map": "Siege of Shanghai",
       "mode": "Conquest Large",
       "maxPlayers": 64
   }
   ```

---

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Styling:** CSS with Battlefield-inspired theme

---

## Deployment
- **Backend:** Hosted on Heroku/Render
- **Frontend:** Deployed on Vercel/Netlify

---

## Credits
- Background Image: Designed for this project.
- UI Inspiration: Battlefield 4.

---

## License
This project is licensed under the MIT License.
