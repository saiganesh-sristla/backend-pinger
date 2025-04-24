
# 🔁 Render Pinger

A lightweight React.js (Vite) app that keeps your free-tier Render.com backend services alive by periodically pinging them. Render's free tier backends go to sleep after 15 minutes of inactivity — this app prevents that by sending HTTP requests every 13 minutes.

---

## 🚀 Features

- Periodically pings multiple backend URLs
- Configurable ping interval
- Keeps Render services alive and responsive
- Simple UI (can be hidden if hosted purely for backend pinging)

---

## 📦 Tech Stack

- React.js (via Vite)
- Axios for API requests
- Hosted on Vercel / Netlify (recommended)

---

## 🛠️ Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/render-pinger.git
   cd render-pinger
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add your backend URLs:**

   Open `src/App.jsx` and update the `urls` array with your backend URLs:

   ```js
   const urls = [
     'https://your-backend-1.onrender.com',
     'https://your-backend-2.onrender.com',
     // Add more as needed
   ];
   ```

4. **Run locally (optional):**

   ```bash
   npm run dev
   ```

## 🧠 How It Works

Render shuts down free services after 15 minutes of inactivity. This app sends a simple `GET` request to each backend every 13 minutes to prevent that.

You can verify it's working by watching your Render dashboard for uptime or enabling logs.

---

## ⚙️ Configuration

You can change the ping interval in `App.jsx`:

```js
const interval = setInterval(pingBackends, 1000 * 60 * 13); // every 13 minutes
```

---

## 💡 Optional Improvements

- Store backend URLs in `.env` file
- Add toggle for enabling/disabling auto-ping
- Convert to a background PWA (for mobile auto-run)
- Display ping success/failure logs in the UI