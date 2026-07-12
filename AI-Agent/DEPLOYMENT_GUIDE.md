# Vercel Deployment Guide: Correct Architecture

## The "Two-Project" Flow
To make this work professionally on Vercel, you need **two separate deployments**:
1.  **The Brain (Backend)**: Your Python Code (`server.py`). You have already done this! ✅
2.  **The Face (Frontend)**: Your React Code (`client` folder). You need to do this next. ⬜

### Why?
Your Frontend is running in the user's browser. It needs to know *where* the Backend is living on the internet. By default, it looks for `localhost` (your laptop), which doesn't work for other people.

---

### Phase 1: Get the Backend URL
1.  Go to your **Vercel Dashboard**.
2.  Click on your Python Project (`clinical-agent-q71j`).
3.  Click "Visit" or copy the **Domain** (e.g., `https://clinical-agent-q71j.vercel.app`).
4.  **Test it**: Open that link in a browser. You should see `{"status": "ok", ...}`.
5.  **Copy this URL**.

### Phase 2: Deploy the Frontend (The "Face")
1.  Go to your GitHub repo.
2.  Go to **Vercel** -> **New Project** -> Import the SAME repository again.
3.  **Project Name**: `clinical-agent-frontend` (or similar).
4.  **Framework Preset**: Vite.
5.  **Root Directory**: Click "Edit" and select the `client` folder. ⚠️ CRITICAL STEP!
6.  **Environment Variables**:
    *   Expand the section.
    *   **Key**: `VITE_API_URL`
    *   **Value**: Paste your Backend URL (e.g., `https://clinical-agent-q71j.vercel.app`).
    *   *Important*: Remove any trailing slash `/` at the end.
7.  Click **Deploy**.

### Phase 3: Verify Connection
1.  Once the Frontend is deployed, visit the **Frontend URL**.
2.  Open the Developer Tools (F12) -> Console.
3.  You should successfully see traffic going to your Vercel Backend, NOT `localhost`.

### Troubleshooting
*   **Failed to load resource: localhost**: You forgot to add `VITE_API_URL` or you didn't rebuild the frontend after adding it. Redeploy the frontend.
*   **CORS Error**: Ensure your Backend (`server.py`) has CORS set to `allow_origins=["*"]` (It does by default).
