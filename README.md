# TravelMate 🌍

## About the Project

TravelMate is a travel planning website that I am developing to make travelling easier and more convenient. The main idea behind this project is to bring different travel-related services together on a single platform.

Users can explore destinations, get travel suggestions, search for hotels, translate languages and access emergency assistance.

I am building this project using React, Python Flask and Node.js.

## Features

- **Explore Destinations:** Get recommendations for different travel destinations.
- **AI Travel Assistant:** Ask travel-related questions and get suggestions.
- **Hotel Search:** Search for hotels for your trip.
- **Language Translation:** Translate text into different languages.
- **Travel Reels:** Explore travel-related videos and content.
- **Emergency Assistance:** Access emergency contact information.

## Technologies Used

- React.js – Frontend
- JavaScript – Application logic
- Node.js and Express.js – Backend APIs
- Python and Flask – Backend
- CSS – Styling
- Git and GitHub – Version control

## Project Structure

```text
Travel-Platform/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── flask-backend/
│   ├── templates/
│   ├── static/
│   ├── app.py
│   └── requirements.txt
│
├── node-backend/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── images/
├── initial/
├── UI UX/
└── README.md
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Arushhhhhh/TravelMate.git
cd TravelMate
```

### 2. Run Frontend

Open a terminal:

```powershell
cd frontend
npm.cmd install
npm.cmd start
```

Frontend runs on `http://localhost:3000`.

### 3. Run Node.js Backend

Open another terminal:

```powershell
cd node-backend
npm.cmd install
$env:PORT=5001
npm.cmd start
```

Backend runs on `http://localhost:5001`.

Health check: `http://localhost:5001/health`

### 4. Run Flask Backend

Open another terminal:

```powershell
cd flask-backend
python -m venv .venv
```

Activate the virtual environment:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install requirements and start Flask:

```powershell
pip install -r requirements.txt
python app.py
```

Flask runs on `http://localhost:5000`.

**Note:** Keep all three terminals running while using the project. The commands above are for Windows PowerShell. On macOS/Linux, use `npm` instead of `npm.cmd`.

## API Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/health` | Check backend status |
| GET | `/api/destinations` | Get destination recommendations |
| POST | `/api/chat` | Travel assistant |
| POST | `/api/translate` | Language translation |
| GET | `/api/emergency/:country` | Emergency contacts |

## Current Status

The frontend and both backends are running successfully.

The homepage, navigation, destination page and AI assistant have been tested. The Node.js APIs are also working with sample responses.

Some features still need further development and integration with real-world services.

## Future Scope

- Integrating a real AI model for travel assistance.
- Improving destination recommendations.
- Adding real-time hotel and flight information.
- Integrating a proper translation service.
- Adding user login and registration.
- Improving the overall UI and user experience.

---

**TravelMate – Explore More, Travel Better! ✈️**