import { Analytics } from "@vercel/analytics/react"
import React from 'react'; // Add explicit import
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(<App />);
