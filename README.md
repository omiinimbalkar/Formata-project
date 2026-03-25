<div align="center">

# 🚀 DataRefine AI

**AI-Powered Data Transformation & Quality Intelligence Platform**

[![FastAPI](https://img.shields.io/badge/FastAPI-0.109.0-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

**DataRefine AI** is a modern, production-ready data processing platform that transforms messy, unstructured data into clean, validated, and AI-ready datasets.

Built using **FastAPI** and **Next.js**, it provides a complete pipeline for data ingestion, cleaning, transformation, validation, and quality assurance with real-time tracking and detailed error reporting.

Whether you're dealing with missing values, inconsistent formats, duplicates, or outliers — DataRefine AI handles it efficiently and intelligently.

---

## ✨ Features

### 📊 Data Processing
- Multi-format support (CSV, JSON, Excel, Markdown)
- Smart parsing with automatic delimiter detection
- Data cleaning (duplicates, outliers, missing values)
- Type normalization & validation
- Advanced filtering with multiple conditions
- Schema validation for data integrity

### 🔍 Data Quality & Profiling
- Data quality scoring system
- Statistical analysis using ydata-profiling
- Detailed error reporting (row-level insights)
- Before/After transformation comparison

### 🤖 AI & ML Integration
- OpenAI embeddings generation
- AI-ready output formats for ML pipelines

### 🧑‍💻 Developer Experience
- RESTful API with Swagger docs
- Real-time job tracking
- Postman collection included
- Fully tested backend system

---

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 18+
- Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/omiinimbalkar/Formata-project.git
cd Formata-project


cd backend

pip install -r requirements.txt

# Create .env file
cat > .env << EOF
API_KEY=your_secure_api_key_here
STORAGE_PATH=./storage
MAX_FILE_SIZE=100
OPENAI_API_KEY=your_openai_key
EOF

# Run server
uvicorn app.main:app --reload

cd frontend

npm install

# Create .env.local
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_KEY=your_secure_api_key_here
EOF

npm run dev

4️⃣ Access Application
UI → http://localhost:3000
API → http://localhost:8000
Docs → http://localhost:8000/docs


Frontend (Next.js)
   ↓
REST API
   ↓
Backend (FastAPI)
   ↓
Services Layer (Processing Logic)
   ↓
Job Queue & Workers
   ↓
Storage System

📖 API Endpoints
Core APIs
POST /ingest → Upload file
POST /process/{job_id} → Start processing
GET /status/{job_id} → Check progress
GET /result/{job_id} → Download output
GET /errors/{job_id} → Error report
Advanced APIs
POST /convert → Format conversion
POST /profile/{job_id} → Data profiling
POST /vectors/{job_id} → AI embeddings
GET /jobs → List all jobs
🔐 Authentication
curl -H "X-API-Key: your_api_key" http://localhost:8000/jobs
🧪 Testing
cd backend

pytest
pytest --cov=app tests/

✔ Parsing
✔ Filtering
✔ Normalization
✔ Validation
✔ Quality Scoring

🐳 Docker (Backend)
cd backend

docker build -t datarefine-backend .

docker run -p 8000:8000 \
  -e API_KEY=your_api_key \
  -v $(pwd)/storage:/app/storage \
  datarefine-backend
📊 Example Usage
# Upload file
curl -X POST http://localhost:8000/ingest \
  -H "X-API-Key: your_api_key" \
  -F "file=@data.csv"

# Process data
curl -X POST http://localhost:8000/process/abc123 \
  -H "X-API-Key: your_api_key" \
  -d '{"remove_duplicates": true}'
🛠️ Tech Stack
Backend
FastAPI
Python
Pandas / NumPy
ydata-profiling
OpenAI
Frontend
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
🤝 Contributing
Fork repo
Create branch
Commit changes
Push
Create PR
📝 License

MIT License

🙌 Acknowledgments
FastAPI
Next.js
shadcn/ui
ydata-profiling
📞 Support

GitHub Issues:
https://github.com/omiinimbalkar/Formata-project/issues
