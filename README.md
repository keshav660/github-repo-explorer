# GitHub Repo Explorer

## Project Overview


The application allows users to search for any GitHub username and view the user's public profile information along with their public repositories. The frontend communicates only with a custom Node.js backend, which acts as a proxy between the application and the GitHub API.

Current Status:................

---

## Features Completed

### Frontend Setup

* React application initialized using Vite
* Tailwind CSS configured
* Project folder structure created

### Search Functionality (UI)

* SearchBar component created
* Controlled input using React state
* Username passed from SearchBar to parent component using callback props

### Profile Section (UI)

* ProfileCard component created
* Temporary mock profile data displayed (for testing purpose)
* Responsive card layout implemented

---

## Folder Structure

client/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── ProfileCard.jsx
│   ├── pages/
│   │   └── Home.jsx
│   └── services/

---

## Development Notes

### Day 1

* Created React project using Vite
* Configured Tailwind CSS
* Built SearchBar component
* Implemented parent-child component communication
* Built ProfileCard component with mock data

### Learnings

* How controlled inputs work in React
* How callback props allow child-to-parent communication
* Basic Tailwind utility classes and responsive layouts

---
### Repository Management

Implemented:

* Repository card component
* Repository list component
* Dynamic rendering using array mapping
* Repository sorting controls

Learning Notes:

Implemented repository sorting at the page level instead of inside presentational components to keep responsibilities separated and maintain predictable data flow.

### Repository Sorting

Implemented sorting support for:

* Repository Name
* Star Count
* Last Updated Date

Implementation Notes:

Sorting is handled in the Home page component since it owns repository data. A shallow copy of the repository array is created before sorting to avoid mutating the original dataset.

### Error Handling

Implemented backend error handling for:

* Invalid GitHub usernames
* GitHub API rate limiting
* Unexpected API failures

The backend converts GitHub API errors into predictable and user-friendly responses before sending them to the frontend.


### Caching Strategy

Implemented in-memory caching using node-cache.

Behaviour:

* First request fetches data from GitHub API.
* Response is stored in cache for 60 seconds.
* Subsequent requests for the same username within 60 seconds are served directly from cache.

Benefits:

* Reduced GitHub API requests
* Better performance
* Helps avoid GitHub rate limits

## Running Locally

Coming soon.............

---

## API Documentation

Coming soon..................







CODE WITH LOVE ❤️ _Keshav bhatt_
