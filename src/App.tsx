import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import GettingStarted from './pages/GettingStarted';
import Architecture from './pages/Architecture';
import UsageGuides from './pages/UsageGuides';
import Security from './pages/Security';
import Contributing from './pages/Contributing';
import Roadmap from './pages/Roadmap';
import License from './pages/License';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'features':
        return <Features />;
      case 'getting-started':
        return <GettingStarted />;
      case 'architecture':
        return <Architecture />;
      case 'usage-guides':
        return <UsageGuides />;
      case 'security':
        return <Security />;
      case 'contributing':
        return <Contributing />;
      case 'roadmap':
        return <Roadmap />;
      case 'license':
        return <License />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex">
          <Sidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            sidebarOpen={sidebarOpen}
          />
          <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} pt-16`}>
            <div className="max-w-5xl mx-auto px-6 py-8">
              {renderPage()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
