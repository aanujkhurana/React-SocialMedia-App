[![NPM Version](https://img.shields.io/npm/v/d3-org-chart.svg)](https://npmjs.org/package/d3-org-chart)
[![React](https://img.shields.io/badge/React-17.0.2-blue.svg)](https://reactjs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-3.0.0-orange.svg)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-2.2.19-blueviolet.svg)](https://tailwindcss.com/)

# 📌 PIN BOARD REACT-Web-App

Welcome to PIN BOARD, a full-stack responsive social media web application similar to Pinterest. PIN BOARD allows users to log in using Google, share and download images with associated links, and engage through comments.

## Index
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Local Development](#local-development)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Screenshots](#screenshots)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Live Demo

🔗 [Click here to visit the live demo](https://pinsboard.netlify.app)

![Preview](/screenshots/img4.png)

## Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Backend**: Sanity.io

## Local Development

### Frontend

**Prerequisites:**

Ensure you have the following installed on your machine:

- Git
- Node.js
- npm

**Cloning the Repository:**

```bash
git clone https://github.com/aanujkhurana/AI_ArticleSummary-React.git
cd AI_ArticleSummary-React/
```

**Set Up Environment Variables:**

Create a new file named `.env` in the frontend folder of the project and add the following content:

```env
VITE_GOOGLE_API_TOKEN = [Google-Auth-API-Key]
VITE_SANITY_PROJECT_ID = [Sanity-Project-ID]
VITE_SANITY_TOKEN = [Sanity-Token]
VITE_SANITY_DATASET = [Sanity-Dataset]
```

Replace the placeholder values with your actual credentials/API keys.

**Running the Project:**

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Backend

**Prerequisites:**

Ensure you have the following installed on your machine:

- Git
- Node.js
- npm

**Cloning the Repository:**

```bash
git clone https://github.com/aanujkhurana/AI_ArticleSummary-React.git
cd AI_ArticleSummary-React/
```

**Set Up Environment Variables:**

Create a new file named `.env` in the backend folder of the project and add the following content:

```env
SANITY_PROJECT_ID = [Sanity-Project-ID]
SANITY_DATASET = [Sanity-Dataset]
SANITY_TOKEN = [Sanity-Token]
```

Replace the placeholder values with your actual Sanity.io project credentials.

**Running the Project:**

```bash
cd backend
npm install
npm run dev
```

Visit [http://localhost:3333](http://localhost:3333) in your browser.

## Screenshots

<div align="left">
  <img src="/screenshots/img4.png" width="400px"</img>
  <img src="/screenshots/img3.png" width="400px"</img>
  <img src="/screenshots/img2.png" width="400px"</img>
  <img src="/screenshots/img1.png" width="400px"</img>
</div>

## Contribution

Contributions are welcome! If you want to contribute, please fork the repository and create a pull request. 

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [Sanity.io](https://www.sanity.io) for providing the backend infrastructure.
- Special thanks to the contributors of React, Tailwind CSS, and other open-source libraries used in this project.
