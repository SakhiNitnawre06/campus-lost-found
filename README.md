# Campus Lost & Found Management System

This project is a MERN Stack web application designed to manage lost and found items on campus. Students can report lost items, report found items, and track item status.

---

## Technologies Used

Frontend:
- React.js
- Tailwind CSS
- DaisyUI
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Features

- Report lost items
- Report found items
- View all reported items
- Update item status (Lost → Found → Returned)
- Delete items
- Search items
- Category-wise item organization
- Toast notifications for actions

---

## Project Structure

campus-lost-found
│
├── frontend
│   └── React application
│
├── backend
│   └── Node.js + Express API
│
└── README.md

---

## Installation

### Backend Setup

cd backend
npm install
npm start

Backend runs on:

http://localhost:3000

---

### Frontend Setup

cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3001

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/items | Get all items |
| POST | /api/items | Add item |
| PUT | /api/items/:id | Update item |
| DELETE | /api/items/:id | Delete item |

---

## Deployment

Backend deployed using Render.

---

## Author

MERN Stack Student Project – 2026

