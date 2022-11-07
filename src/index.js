import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import search from "./components/assets/search.svg";
import bowl from "./components/assets/bowl.svg";
import money from "./components/assets/money.svg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const navbarItems = [
  {
    id: 'home',
    title: 'home',
  },
  {
    id: 'about',
    title: 'about',
  },
  {
    id: 'deals',
    title: 'deals'
  }
]

export const features = [
  {
    id: "feature-1",
    icon: search,
    title: "Find affordable food",
    content:
      "Search through our collection of deals from vendors on campus to find your next meal",
  },
  {
    id: "feature-2",
    icon: bowl,
    title: "Enjoy your meal",
    content:
      "Collect your coupon code, tell your friends and enjoy your food in-store.",
  },
  {
    id: "feature-3",
    icon: money,
    title: "Keep saving",
    content:
      "Get your moneys worth and keep coming back to nürish to enjoy more great savings!",
  },
];