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
  },
  {
    id: 'team',
    title: 'team'
  }
]

export const features = [
  {
    id: "feature-1",
    icon: search,
    title: "Find affordable food",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: bowl,
    title: "Enjoy your meal",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: money,
    title: "Keep saving",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];