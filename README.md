A full-stack Real Estate Management Web Application for Zorera Infratech, built to streamline property listing, buyer-seller communication, and admin control — offering a modern, mobile-responsive interface and secure backend.

🌐 Live Website

https://zorerainfratech.com image
<img width="1909" height="966" alt="image" src="https://github.com/user-attachments/assets/2cd3be09-9e45-45a0-a6be-7bf3a4d732bb" />


🚀 Tech Stack Layer Technology Frontend React + TypeScript + Vite Styling Tailwind CSS, shadcn/ui, Lucide Icons Backend Node.js + Express.js Database MongoDB Atlas Auth JWT (JSON Web Tokens) Deployment VPS / Railway / Netlify State Mgmt React Context + React Query Storage Cloud / Local upload (via Multer or Firebase Storage) 📦 Features 🧑‍💼 Admin Panel

Add, edit, delete properties

Manage categories and featured listings

Approve or reject user submissions

Dynamic page management (Gallery, About, etc.)

Upload property images & documents

Dashboard stats and user analytics

🏡 User Panel

Browse all available properties by category

Filter by price, location, or type (House, Plot, Commercial, etc.)

View property details with images & description

Contact via WhatsApp or Enquiry form

Submit property for sale or rent image
<img width="1898" height="867" alt="image" src="https://github.com/user-attachments/assets/f123cab4-9859-4530-ac8a-c202da2698c5" />


💳 Additional Integrations

Contact form integrated with backend mail service

WhatsApp floating chat

PWA setup for app-like install

SEO-friendly meta tags

Responsive UI for mobile, tablet, and desktop

⚙️ Project Setup 1️⃣ Clone the Repo git clone https://github.com/your-username/zorera-property-hub-main.git cd zorera-property-hub-main

2️⃣ Install Dependencies

For client: image
<img width="1896" height="868" alt="image" src="https://github.com/user-attachments/assets/85c3a7e3-c52f-49b7-a190-ec352e7822cf" />


cd client npm install

For server:

cd server npm install

3️⃣ Environment Variables

Create .env files inside /server and /client:

.env (Server) PORT=4000 MONGODB_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key CORS_ORIGIN=http://localhost:5173

.env (Client) VITE_API_BASE_URL=http://localhost:4000/api

4️⃣ Run the App Locally

Run backend: image
<img width="1882" height="857" alt="image" src="https://github.com/user-attachments/assets/99065b74-62f5-4835-a573-673651eef618" />


cd server npm run dev

Run frontend:

cd client npm run dev

App runs at http://localhost:5173

🗂️ Folder Structure zorera-property-hub-main/ │ ├── client/ # React Frontend │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── contexts/ │ │ ├── services/api.js │ │ └── main.tsx │ └── vite.config.ts │ ├── server/ # Express Backend │ ├── routes/ │ ├── models/ │ ├── controllers/ │ ├── middleware/ │ └── index.ts │ └── README.md # (You’re here)

🔐 Authentication Flow image
<img width="1882" height="857" alt="image" src="https://github.com/user-attachments/assets/5f4b6507-5443-4428-a1b1-13ef9689e075" />


User registers → Email verification (optional)

Login via JWT token

Protected routes for admin pages

Token stored in HTTP-only cookies or localStorage

📊 Admin Dashboard Modules

Dashboard Overview (total users, properties, enquiries)

Property Management (CRUD)

Category Management

Transaction / Package Management (if active)

Media Gallery

Page Content Editor

📱 Responsive Design

Fully optimized for Mobile, Tablet, and Desktop

Tailwind + flex/grid system ensures layout consistency

Optimized images for faster loading image
<img width="1894" height="897" alt="image" src="https://github.com/user-attachments/assets/4f38348f-d8f1-4aba-a4a4-f2463f74c81b" />


🧾 Future Enhancements

Razorpay / PhonePe payment integration

Booking system for rental properties

Multi-user role (Admin / Sub-Admin / Agent)

SEO panel for dynamic metadata

AI-based property recommendation
