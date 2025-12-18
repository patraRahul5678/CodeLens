# CodeLens – AI Code Reviewer 🚀

CodeLens is a full-stack **AI-powered code review platform** that helps developers analyze, review, and improve their code using **Google Gemini**. It features secure backend-only AI access, per-user rate limiting, and a clean deployment workflow.

---

## 🚀 Live Demo

👉 [Visit CodeLens Live](https://codelens-1-e0t1.onrender.com/)

## ✨ Features

* 🤖 **AI Code Review** using Google Gemini
* 🔐 **Secure API Key Handling** (never exposed to frontend)
* ⏱ **Rate Limiting** to prevent abuse
* 👤 **User Authentication** (JWT / cookies)
* 🌐 **CORS-safe frontend–backend communication**
* ☁️ **Production-ready deployment on Render**

---

## 🛠 Tech Stack

### Frontend

* React + Vite
* Tailwind CSS
* Axios / Fetch API

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Google Gemini SDK
* express-rate-limit

---

## 📁 Project Structure

```
coderee/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── .env            # ignored by git
│   ├── .gitignore
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── package.json
│
└── README.md
```

---

## 🔐 Environment Variables

### Local Development (`backend/.env`)

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

> ⚠️ **Never commit `.env` to GitHub**

A safe template is provided as `.env.example`.

---

## 🚦 Rate Limiting (Per User)

AI routes are protected using **express-rate-limit**:

* ⏱ 10 AI requests per minute per user
* 🌍 IPv4 + IPv6 safe
* 🧠 Uses user ID when authenticated, IP as fallback

This prevents abuse and protects your Gemini API quota.

---

## ▶️ Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/CodeLens.git
cd coderee
```

### 2️⃣ Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3️⃣ Start the app

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

---

## ☁️ Deployment (Render)

### Backend

1. Create a **Web Service** on Render
2. Connect your GitHub repo
3. Set Environment Variables:

   * `GEMINI_API_KEY`
   * `CLIENT_URL`
4. Deploy

> `.env` is **not required** on Render

---

## 🔒 Security Best Practices

* ✅ API key stored only in Render Environment
* ❌ No frontend access to Gemini
* ❌ No secrets in GitHub
* ✅ Rate limiting enabled
* ✅ `.env` ignored via `.gitignore`

---

## 🧠 Common Issues

### ❌ API key expired

* Create a new Gemini key
* Update it in Render → Environment
* Redeploy the service

### ❌ GitHub says "API key leaked"

* Revoke the exposed key
* Ensure `.env` is ignored
* Never commit secrets again

---

## 📜 License

MIT License

---

## 🙌 Author

**Rahul Patra**

If you found this project helpful, feel free to ⭐ the repo!
