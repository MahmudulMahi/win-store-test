# Win Store Frontend - Interview Submission Guide

This is a **Next.js (App Router + TypeScript)** project built for assessment.  
It consumes APIs from a live backend and displays product-related data.

---

## 🔗 Base API URL

https://mm-assesment-server.vercel.app/api/v1/

yaml
Copy code

---

## ▶️ How to Run the Project

1. **Clone the Repository**
```bash
git clone <repository-url>
cd win-store
Install Dependencies

bash
Copy code
npm install
Alternatively, you can use yarn install or pnpm install.

Setup Environment Variables
Create a .env.local file in the project root and add:

env
Copy code
NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
⚠️ Restart the server after creating or updating .env.local.

Run the Project

bash
Copy code
npm run dev
Open in Browser

arduino
Copy code
http://localhost:3000