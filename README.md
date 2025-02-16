# 🚀 MediumLite – A lightweight Medium-style blogging platform

A modern, lightweight, and scalable blogging platform inspired by Medium, designed for developers and content creators. This platform leverages a serverless backend and a high-performance frontend, ensuring seamless content publishing and user interaction.

## ✨ Features
- 📝 **Write & Publish** – Rich text editor for blog posts.
- 🔑 **User Authentication** – Secure login & account management.
- 🌍 **Serverless Backend** – Deployed on Cloudflare Workers for fast and scalable APIs.
- 🚀 **Optimized Frontend** – Built with React + Tailwind CSS for a smooth UI/UX.
- 📡 **PostgreSQL Database** – Managed, scalable database with Prisma ORM.
- ⛓ **Connection Pooling** – Implements Prisma architecture for connection pooling to optimize database interactions.

## Tech Stack
### Frontend:
- React – Component-based UI for a dynamic user experience.
- TypeScript – Type-safe development for reliability.
- Tailwind CSS – Utility-first styling for a responsive design.
  
### Backend:
- Hono – Lightweight web framework for Cloudflare Workers.
- Cloudflare Workers – Serverless, globally distributed API hosting.
- PostgreSQL – Scalable, relational data storage.
- Prisma ORM – TypeScript ORM for database management.
- Zod (for type validation).

### Deployment:
- Cloudflare Workers (via Wrangler)
  
## Why Serverless?
- ⚡ Speed: Cloudflare Workers run at the edge, reducing latency.
- 💰 Cost-Efficient: No need to manage traditional servers.
- 📈 Scalability: Handles high traffic without performance issues.

## Folder Structure
```
Medium/
│── Frontend/       # React frontend
│── Common/         # Zod types
│── Backend/        # Hono backend
│── README.md       # Documentation
```

## ⚙️ Installation & Setup
### 1. Clone the Repository
```bash
git clone https://github.com/ganeshburri/Medium.git
cd Medium
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

### 3. Set Up Environment Variables
Create `.env` files in both the `Frontend/` and `Backend/` directories and add required env variables.

### 4. Configure the Database

This app uses PostgreSQL with Prisma ORM for database management. To set up your database connection:

- Add your connection pool URL and JWT secret in the `wrangler.json` file.

### 5. Start the Development Server
```bash
# Start the frontend
cd frontend
npm run dev

# Start the backend
cd backend
npm run dev
```
## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a pull request.
