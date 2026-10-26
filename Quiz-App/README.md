# Quiz App

This project is a small React application that presents a five-question true/false quiz. The app uses React Router to move between screens, a shared page context to track the current question number, and a fetch call to a sample JSON API while each question screen loads.

## Project overview

The app is built with:

- React
- Vite
- React Router
- Tailwind CSS utility classes for styling

The main idea is simple: the user starts on the first question page, answers the question, then moves to the next page until the quiz is completed.

## Project structure

```bash
Quiz-App/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── NavBar.jsx
│   └── pages/
│       ├── One.jsx
│       ├── Two.jsx
│       ├── Three.jsx
│       ├── Four.jsx
│       ├── Five.jsx
│       └── NotFound.jsx
└── README.md
```

### Main files

- `src/main.jsx` - application entry point.
- `src/App.jsx` - defines the router and the page context used throughout the app.
- `src/pages/` - each file represents a quiz question screen.
- `src/components/NavBar.jsx` - top navigation bar displayed on each page.
- `src/components/Footer.jsx` - footer displayed at the bottom of the page.
- `src/App.css` and `src/index.css` - styling for the app.

## How the app works

1. The app starts in `src/main.jsx`, which renders the root component.
2. `src/App.jsx` wraps the app in `BrowserRouter` and defines all route paths:
   - `/` for the first question
   - `/2` for the second question
   - `/3` for the third question
   - `/4` for the fourth question
   - `/5` for the fifth question
   - `*` for the not found page
3. A `PageContext` is created in `App.jsx` and stores the current page value.
4. Each question page (`One.jsx`, `Two.jsx`, etc.) uses `useContext(PageContext)` and `useEffect` to request data from the JSONPlaceholder API using the current page number as part of the URL.
5. The page renders the question text and a pair of radio inputs for `TRUE` and `FALSE`.
6. Buttons let the user move between pages with `Link` components from `react-router-dom`.

This gives the app a simple flow: question screen -> navigation -> next question -> previous question.

## Running the project locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually something like:

```bash
http://localhost:5173
```

## Build for production

```bash
npm run build
```

This creates a production-ready build in the `dist/` folder.

## Notes

This app is a lightweight quiz prototype and is designed to demonstrate routing, React state/context, and basic API fetching in a frontend app. It can be expanded later with score tracking, answer validation, and a final results page.
