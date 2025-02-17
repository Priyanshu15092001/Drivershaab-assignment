
# 📚 Book CRUD Application (Full Stack)

This is a full-stack Book Management CRUD application with user authentication and protected routes.
Users can add, edit, delete, and view books, with authentication handled using JWT tokens.


## 🚀 Tech Stack

**Client:** React.js, Redux Toolkit, React Router Dom, Axios

**Server:** Node.js, Express.js, MongoDB (Mongoose), JWT Authentication, bcrypt.js (Password hashing)


## 📥 Installation

1. Clone the repository

```bash
  git clone https://github.com/your-username/book-crud-app.git
  cd book-crud-app
```
2. Backend Setup

```bash
  cd backend
  npm install
```
- Create a .env file in the backend folder:
```bash
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
  PORT=5000
```
- Start the backend server:
```bash
  npm start
```
3. Frontend Setup
```bash
cd ../frontend
npm install
```
- Start the frontend:
```bash
npm run dev
```
## 🛠 Folder Structure
```bash
book-crud-app/
│── backend/          # Backend (Node.js, Express, MongoDB)
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── middleware/   # Authentication middleware
│   ├── controllers/  # Business logic
│   ├── config/       # Database config
│   ├── server.js     # Main server file
│── frontend/         # Frontend (React, Redux, Axios)
│   ├── src/
│   │   ├── assets/   # Icons, Pictures
│   │   ├── components/   # UI components
│   │   ├── redux/        # Redux slices (auth & books)
│   │   ├── App.jsx        # Main App component
│   │   ├── main.jsx      # Entry point
│── README.md          # Documentation
```

## 🔐 Authentication & Protected Routes
- JWT token is stored in session storage.
- Users must be logged in to access book management pages.
- ProtectedRoute.js ensures only authenticated users can access books.

## ✨ How to Use
- Sign up or log in with valid credentials.
- Manage books (Add, Edit, Delete).

## 🛠 Security Measures
- Password hashing using bcrypt.
- JWT authentication for secure API access.
- Middleware to protect routes.
- Redux state management for authentication.
- Session storage for storing JWT tokens.
