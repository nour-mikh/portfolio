import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/navbar.scss';
import './styles/firstSection.scss';
import './styles/secondSection.scss';
import './styles/thirdSection.scss';
import './styles/fourthSection.scss'
import App from './App';
import Navigation from './Navigation';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
