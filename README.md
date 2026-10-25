# OpenPilot Research

Open-source AI research agent. This repository currently contains the initial application skeleton: a FastAPI backend and a Next.js research dashboard.

The research agent, citations, knowledge base, history, and traces are **not implemented yet**. The UI does not fabricate answers or past investigations.

## Project structure

- `frontend/` — Next.js (App Router), TypeScript, and Tailwind CSS dashboard
- `backend/` — FastAPI API (`backend/main.py`)
- `backend/.venv/` — Python virtual environment

## Prerequisites

- Node.js 20+
- Python 3.11+

## Backend

From the repository root:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

On macOS or Linux, activate the environment with `source .venv/bin/activate` instead.

API keys belong in `backend/.env` (see `backend/.env.example`). Do not hardcode secrets.

Endpoints:

- `GET http://localhost:8000/health`
- `GET http://localhost:8000/api/research/status`
- Docs: `http://localhost:8000/docs`

## Frontend

In a second terminal, from the repository root:

```powershell
cd frontend
copy .env.example .env.local
npm install
npm run dev
```

On macOS or Linux, use `cp .env.example .env.local`.

Open [http://localhost:3000](http://localhost:3000). The dashboard reads `NEXT_PUBLIC_API_URL` and defaults to `http://localhost:8000`.
