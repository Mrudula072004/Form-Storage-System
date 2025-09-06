# User Management System

A simple full-stack application that allows users to submit their **Name, Email, and Message** through a form.  
The data is stored in **MongoDB** and displayed dynamically on the frontend.  

## 🚀 Features
- User-friendly form to collect Name, Email, and Message  
- Stores data securely in MongoDB  
- Displays all submitted users in a list  
- Real-time updates after adding a new user  
- Backend built with **Express.js** and **Mongoose**  
- Frontend designed with **HTML, CSS, and JavaScript (Fetch API)**  

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  

## 📂 Project Structure
├── index.html # Frontend UI
├── server.js # Express server & routes
├── package.json # Dependencies & scripts


## 🐳 Run with Docker

1. Build the Docker image:
   ```bash
   docker build -t user-management-system .

2.Run the container:
docker run -p 3000:3000 user-management-system

3.Open in your browser:
http://localhost:3000
                OR
## ⚙️ Installation & Setup
1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
2.Install dependencies
npm install

3.Start MongoDB locally (or connect to your MongoDB Atlas/ Docker setup).
Example local connection string in server.js:
const MONGO_URI = "mongodb://127.0.0.1:27017/formdb";

4.Run the server
node server.js

5.Open the app in your browser:
http://localhost:3000



