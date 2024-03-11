# PIN BOARD: A Pinterest-like React Social Media App

Pin Board is a full-stack, responsive social media web application inspired by Pinterest. It allows users to:

* Login using Google Authentication
* Share and download images with links
* Engage with other users through comments

**Live Demo:** [Pin Board](https://pinsboard.netlify.app)

## Tech Stack

* Frontend: React
* Styling: Tailwind CSS
* Backend: Sanity.io

## Local Development

Follow these steps to set up and run Pin Board on your machine.

**Prerequisites:**

* Git (https://git-scm.com/downloads)
* Node.js (https://nodejs.org/en)
* npm (Node Package Manager) - Usually comes bundled with Node.js installation

**Project Setup:**

1. Clone the repository:

   ```bash
   git clone [invalid URL removed]
   ```

   Replace `your-username` with your actual GitHub username.
2. Navigate to the project directory:

   ```bash
   cd pin-board
   ```

**Frontend Setup:**

1. **Environment Variables:**

   Create a file named `.env` in the `frontend` directory and add the following lines:

   ```
   VITE_GOOGLE_API_TOKEN=YOUR_GOOGLE_AUTH_API_KEY
   VITE_SANITY_PROJECT_ID=YOUR_SANITY_PROJECT_ID
   VITE_SANITY_TOKEN=YOUR_SANITY_MANAGEMENT_TOKEN
   VITE_SANITY_DATASET=YOUR_SANITY_DATASET
   ```

   * Replace placeholders with your actual credentials:
      * Get a Google Auth API key from https://console.cloud.google.com/
      * Create a Sanity project and find your project ID, dataset, and a management token at https://www.sanity.io/pricing

2. **Install Dependencies:**

   ```bash
   cd frontend
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   This will start the development server at http://localhost:5173. Open this URL in your browser to view the application.
