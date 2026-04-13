# Qumi-Ori Website

Modern React website for Qumi-Ori Resources, rebuilt with cleaner component structure, responsive layouts, and updated SEO metadata.

## Highlights

- Full multi-page experience (`Home`, `About`, `Products`, `Contact`) with React Router.
- Unified styling system in `src/App.css` replacing fragmented legacy styles.
- Improved semantic markup and accessibility across navigation, content sections, and forms.
- Contact form integrated with Web3Forms, including success and error feedback via SweetAlert.
- Updated `public/index.html` with production-ready meta description and social metadata.

## Tech Stack

- React 18
- React Router DOM
- React Icons
- SweetAlert2
- Create React App (react-scripts)

## Getting Started

1. Install dependencies:

   `npm install`

2. Start development server:

   `npm start`

3. Build for production:

   `npm run build`

## Environment Variables (Optional)

The contact form uses a fallback Web3Forms access key for compatibility.  
For production, add your own key in a `.env` file:

`REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key`

## Project Structure

- `src/App.js` - App routes and global style import.
- `src/App.css` - Shared design system and responsive layout rules.
- `src/components/` - Reusable UI pieces and page content sections.
- `src/components/pages/` - Route-level page wrappers (Nav + content + Footer).
- `public/index.html` - SEO and social metadata template.

## Notes

- Existing logo and client-brand assets were preserved as requested.
- Legacy CSS files in `src/css/` are no longer imported by the app after the rebuild.
