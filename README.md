# Qumi-Ori Website

Marketing website for Qumi-Ori Resources, built with React.

## Tech Stack

- React 18
- React Router DOM

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file (optional):

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

If not provided, the app falls back to the existing default key in the contact form.

## Project Structure

- `index.html` - Vite HTML entry point and SEO metadata
- `src/main.jsx` - React bootstrap
- `src/App.js` - Route configuration
- `src/App.css` - Global design system/styles
- `src/components/` - UI and page sections
