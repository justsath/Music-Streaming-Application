# Music-Streaming-Application
# Music Streaming Application

## Project Overview
A scalable and user-friendly platform that enables seamless audio streaming, personalized recommendations, and efficient music discovery.

---

## Features and Functionalities

### **Homepage**
- Displays trending/top-played songs with artist details.
- Search bar for songs, artists, and albums.
- Filters for genres and moods.

### **Music Player**
- Displays song details: Title, Artist, Album Art.
- Play/Pause, Next, Previous controls.
- Seek bar for navigation with elapsed/remaining time.
- Volume control.

### **Additional Features**
- Personalized recommendations.
- Offline downloads (future enhancement).

---

## Tech Stack

### **Frontend:**
- React.js (UI components).
- Tailwind CSS (styling).
- Redux (state management).

### **Backend:**
- Node.js with Express.js (API services).
- PostgreSQL (structured data storage).
- AWS S3 (media file hosting).

### **Other Tools:**
- Docker (environment portability).
- Jest (testing framework).
- GitHub Actions (CI/CD).

---

## Setup Instructions

### Prerequisites:
1. Node.js (v16 or higher).
2. PostgreSQL.
3. Docker (optional for containerization).

### Steps:
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd music-streaming-application
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_HOST=<database-host>
     DB_USER=<database-username>
     DB_PASS=<database-password>
     AWS_ACCESS_KEY=<aws-access-key>
     AWS_SECRET_KEY=<aws-secret-key>
     JWT_SECRET=<your-jwt-secret>
     ```

4. **Run Database Migrations:**
   ```bash
   npm run migrate
   ```

5. **Start the Application:**
   ```bash
   npm run dev
   ```

6. **Access the Application:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - API: [http://localhost:5000](http://localhost:5000)

---

## Usage Instructions

### **Local Testing**
1. Start the backend server:
   ```bash
   npm run server
   ```
2. Start the frontend:
   ```bash
   npm start
   ```

### **Testing Commands:**
- Run unit tests:
  ```bash
  npm run test
  ```
- Run integration tests:
  ```bash
  npm run test:integration
  ```

---

## Project Workflow

1. **Backend**:
   - APIs for user authentication, music retrieval, and playback.
   - Song metadata storage in PostgreSQL.

2. **Frontend**:
   - Homepage: Fetch and display trending songs via `/songs/trending` API.
   - Player: Fetch song details and stream audio via `/songs/{id}` and `/stream/{song-id}` APIs.

3. **Deployment**:
   - Dockerize the application for consistent environments.
   - Deploy using AWS (EC2, S3, RDS).

---

## Contribution Guidelines
- Fork the repository.
- Create a new branch for each feature/bug fix.
- Commit changes with descriptive messages.
- Submit a pull request for review.

---

## Contact
For queries or contributions, reach out via [email@example.com](mailto:email@example.com).

---

## License
MIT License. Refer to the LICENSE file for more details.

---

## Modular Code Design

### **Homepage Module**
- **Components:**
  - TrendingSongsList: Displays the list of trending songs.
  - SearchBar: Handles user input for searching.
  - GenreFilters: Allows filtering by genre.
- **API Integration:**
  - `/songs/trending`: Fetch trending songs.
  - `/songs/search`: Search for songs or artists.

### **Player Module**
- **Components:**
  - SongDetails: Displays details of the currently playing song.
  - PlayerControls: Handles play/pause, next/previous.
  - ProgressBar: Displays song progress.
  - VolumeControl: Adjusts audio volume.
- **API Integration:**
  - `/songs/{id}`: Fetch song details.
  - `/stream/{song-id}`: Stream audio.

### **API Service Module**
- Handles all API requests using Axios.
- Centralized error handling for API calls.

---

## GitHub Standards

### **Repository Structure:**
```
root
├── frontend/
|   ├── src/
|       ├── components/
|       ├── pages/
|       ├── styles/
|       └── utils/
├── backend/
|   ├── routes/
|   ├── controllers/
|   ├── models/
|   ├── services/
|   ├── utils/
|   └── middlewares/
├── docker-compose.yml
├── README.md
├── LICENSE
└── .env.example
```

### **Commit Message Standards:**
- Use present tense: "Add feature" instead of "Added feature".
- Be descriptive:
  ```
  feat: Add user authentication module
  fix: Resolve API timeout issue
  chore: Update dependencies
  ```

### **Branch Naming Convention:**
- `feature/<feature-name>`
- `bugfix/<issue-name>`
- `hotfix/<critical-issue>`

---
