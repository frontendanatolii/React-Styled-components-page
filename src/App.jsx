import './App.css';
import { Card } from './components/Card/Card';
import { HeaderNavigation } from './components/HeaderNavigation/HeaderNavigation';
import { Hero } from './components/HeroSection/Hero';
import { TabsPage } from './components/Tabs/TabsPage';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';

import companyIcon from './images/companyIcon.svg';

import locationIcon from './images/location_searchIcon.svg'
import { Summary } from './components/Summary/Summary';

const tabs = [
  { id: 'summary', title: 'Summary', content: 'Some text 1' },
  { id: 'performance', title: 'Performance', content: 'Some text 2' },
  { id: 'portfolio', title: 'Portfolio', content: 'Some text 3' },
  { id: 'reviews', title: 'Reviews', content: 'Some text 4' },
  { id: 'latest', title: 'Latest', content: 'Some text 5' }
];

function App() {
  return (
    <div className="App">
      <HeaderNavigation />
      <Hero />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
            </Route>
            <Route path="*" element={<h1 className="title">Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
