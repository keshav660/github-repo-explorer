# GitHub Repo Explorer

A full-stack web application that allows users to search GitHub profiles and explore public repositories. The application uses a custom Node.js backend as a proxy layer between the frontend and the GitHub API, along with server-side caching to improve performance and reduce unnecessary API requests.

## Live Demo

Frontend: https://github-repo-explorer-brown.vercel.app/

Repository: https://github.com/keshav660/github-repo-explorer

---

## Features

### User Search

* Search any public GitHub username
* Fetch profile information from GitHub

### Profile Information

* Avatar
* Name
* Bio
* Followers
* Following
* Public Repository Count

### Repository Explorer

* Repository Name
* Description
* Primary Language
* Star Count
* Last Updated Date

### Repository Sorting

Repositories can be sorted by:

* Name
* Star Count
* Last Updated Date

### Recent Searches

* Stores recent searches using localStorage
* Quickly search previously viewed profiles

### Error Handling

* Invalid GitHub username
* GitHub API failures
* Rate limit handling

### Server-side Caching

* Implemented using node-cache
* Cached responses are stored for 60 seconds
* Reduces API requests and improves response times

### Responsive Design

* Mobile-friendly interface
* Responsive layouts using Tailwind CSS

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Axios
* node-cache
* dotenv
* cors

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Architecture

Frontend (React)
↓
API Service Layer
↓
Express Backend
↓
Cache Layer (node-cache)
↓
GitHub REST API

The frontend never communicates directly with GitHub. All requests are routed through the backend, which handles caching, error management, and response formatting.

---

## API Endpoint

GET /api/github/:username

Example:

/api/github/torvalds

Response:

{
"profile": {},
"repositories": []
}

---

## Caching Strategy

The backend checks whether data for a requested username already exists in memory.

Flow:

1. Request received
2. Cache lookup
3. Cache hit → return cached response
4. Cache miss → fetch from GitHub API
5. Store response for 60 seconds
6. Return data

Benefits:

* Faster response times
* Reduced GitHub API usage
* Lower chance of hitting rate limits

---

## Running Locally

### Clone Repository

git clone https://github.com/keshav660/github-repo-explorer.git

### Frontend

cd client

npm install

npm run dev

### Backend

cd server

npm install

npm start

---

## Environment Variables

Frontend (.env)

VITE_API_URL=http://localhost:5000/api/github

Backend (.env)

PORT=5000

---

## Future Improvements

* Pagination for repositories
* Repository filtering by language
* Dark mode support
* Skeleton loaders
* Search suggestions
* Persistent caching using Redis

---

## Learning Outcomes

This project helped me strengthen my understanding of:

* React component architecture
* State management with hooks
* API integration
* Backend service design
* Error handling strategies
* Server-side caching
* Deployment workflows
* Full-stack application architecture



### Project DEmo VIdeo : 
## 🎥

[![Watch Demo](https://img.youtube.com/vi/SW2RJ_epRwg/hqdefault.jpg)](https://youtu.be/SW2RJ_epRwg)

Click the thumbnail above to watch the full project walkthrough.