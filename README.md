# 📅 Meetup App

A full-stack MERN (MongoDB, Express, React, Node.js) application that helps users **discover, search, and explore online & offline events**.  

🔗 **Live Demo**: [Meetup App](https://meet-up-kp9d.vercel.app/)  

---

## 🚀 Features

### 🎨 Frontend (React + Vite)
- Modern, responsive UI built with **React 19** and **Bootstrap 5**.  
- **Event listing** with image, title, date, host, and type (online/offline).  
- **Search bar** – filter events by title or type.  
- **Dropdown filter** – quickly view events by Online / Offline / All.  
- **Event details page** – full description, speakers, price, address, and extra info.  
- **About page** – highlights platform vision and community value.  
- **Reusable components** (Header, Footer, Event Cards).  

### ⚙️ Backend (Node.js + Express + MongoDB)
- RESTful API endpoints for events:  
  - `POST /events` → Create an event  
  - `GET /events` → Fetch all events  
  - `GET /events/:id` → Fetch event by ID  
- **MongoDB with Mongoose** schema validation (title, type, date, speakers, etc.).  
- **Error handling & validation** (invalid IDs, missing fields, server errors).  
- **CORS setup** to allow frontend-backend communication.  
- Environment variable support via **dotenv**.  

---

## 🛠️ Tech Stack

**Frontend**  
- React 19 (Vite setup)  
- Bootstrap 5  
- React Router v7  
- Axios (API calls)  

**Backend**  
- Node.js + Express  
- MongoDB + Mongoose  
- CORS & dotenv  
- Nodemon (dev only)  

**Deployment**  
- Frontend → [Vercel](https://vercel.com/)  
- Backend → Vercel (serverless)  

---

## 📂 Project Structure

```
meetup-app/
├── backend/
│   ├── config/        # DB connection
│   ├── controllers/   # Event controllers
│   ├── models/        # Event schema
│   ├── routes/        # Event routes
│   ├── server.js      # Express server
│   ├── index.js       # App setup
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/ # Header, Footer
│   │   ├── hooks/      # useFetch (axios)
│   │   ├── pages/      # Events, EventDetails, About
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/Abdul-Kalam0/MeetUp
cd meetup-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

- Create a `.env` file:
```
DB_URI=mongodb+srv://your-mongo-uri
PORT=3000
```

- Run backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend will start on: `http://localhost:5173`  
Backend will run on: `http://localhost:3000`  

---

## 🌍 Deployment

- **Frontend** deployed on **Vercel** → [Meetup App Live](https://meet-up-kp9d.vercel.app/)  
- **Backend** deployed on **Vercel** → API base URL: `https://meet-up-4sk3.vercel.app`  

---

## 📌 API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | `/events`            | Create a new event       |
| GET    | `/events`            | Get all events           |
| GET    | `/events/:eventId`   | Get event by ID          |

**Sample Event JSON**
```json
{
  "title": "Tech Conference 2024",
  "type": "Online",
  "date": "2024-11-10",
  "startTime": "10:00 AM",
  "endTime": "5:00 PM",
  "hostedBy": "John Doe",
  "priceInRupees": 500,
  "address": "Zoom / Google Meet",
  "speakers": ["Alice", "Bob"],
  "details": "An online conference about emerging technologies",
  "dressCode": "Formal",
  "ageRestriction": 18,
  "image": "https://example.com/image.jpg"
}
```

---

## 📷 Screenshots

### Home Page
![Screenshot 2025-09-29 at 10 42 15 PM](https://github.com/user-attachments/assets/8a363671-fd3d-4075-b005-d2295efb3d47)


### Events Page
![Screenshot 2025-09-29 at 10 43 24 PM](https://github.com/user-attachments/assets/1bfe585d-6a50-48c2-a949-cd0e159893cc)


### Event Description
![Screenshot 2025-09-29 at 10 44 31 PM](https://github.com/user-attachments/assets/395d57d6-8b1e-4bba-928a-61347b294f33)


---

## 🤝 Contributing

1. Fork this repo  
2. Create your feature branch: `git checkout -b feature/new-feature`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push branch: `git push origin feature/new-feature`  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the **MIT License**.  
