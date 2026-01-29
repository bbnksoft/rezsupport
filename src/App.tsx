// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import ShipsList from "./components/inventory/ShipsList";
import DeckManagement from "./components/inventory/DeckManagement";
import CabinManagement from "./components/inventory/CabinManagement";
import { Ship } from "./types/ship.types";
import { Deck } from "./types/deck.types";
import "./styles/custom.scss";

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState("inventory");
  const [activePage, setActivePage] = useState("ships-list");
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

  const handleModuleChange = (moduleId: string) => {
    setActiveModule(moduleId);
    if (moduleId === "inventory") {
      setActivePage("ships-list");
    }
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleShipSelect = (ship: Ship) => {
    setSelectedShip(ship);
  };

  const handleDeckSelect = (deck: Deck) => {
    setSelectedDeck(deck);
  };

  const renderPage = () => {
    switch (activePage) {
      case "ships-list":
        return (
          <ShipsList
            onShipSelect={handleShipSelect}
            onPageChange={handlePageChange}
          />
        );
      case "deck-management":
        return (
          <DeckManagement
            ship={selectedShip}
            onPageChange={handlePageChange}
            onDeckSelect={handleDeckSelect}
          />
        );
      case "cabin-management":
        return (
          <CabinManagement
            ship={selectedShip}
            deck={selectedDeck}
            onPageChange={handlePageChange}
          />
        );
      default:
        return (
          <ShipsList
            onShipSelect={handleShipSelect}
            onPageChange={handlePageChange}
          />
        );
    }
  };

  return (
    <MainLayout
      activeModule={activeModule}
      activePage={activePage}
      onModuleChange={handleModuleChange}
      onPageChange={handlePageChange}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default App;
