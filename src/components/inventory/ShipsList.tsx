import React from 'react';
import StatCard from '../common/StatCard';
import Breadcrumb from '../common/Breadcrumb';
import Toolbar from '../layout/Toolbar';
import { Ship } from '../../types/ship.types';

interface ShipsListProps {
  onShipSelect: (ship: Ship) => void;
  onPageChange: (page: string) => void;
}

const ShipsList: React.FC<ShipsListProps> = ({ onShipSelect, onPageChange }) => {
  const ships: Ship[] = [
    { 
      id: 1, 
      name: 'Harmony of the Waves', 
      capacity: 2200, 
      decks: 12, 
      cabins: 1100, 
      status: 'Active',
      icon: '🚢'
    },
    { 
      id: 2, 
      name: 'Melody of the Seas', 
      capacity: 1800, 
      decks: 10, 
      cabins: 900, 
      status: 'Active',
      icon: '⛴️'
    },
    { 
      id: 3, 
      name: 'Rhythm of the Ocean', 
      capacity: 3000, 
      decks: 14, 
      cabins: 1500, 
      status: 'Maintenance',
      icon: '🛳️'
    }
  ];

  const handleViewDecks = (ship: Ship) => {
    onShipSelect(ship);
    onPageChange('deck-management');
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Inventory', path: '/inventory' },
          { label: 'Ships & Vessels' },
        ]}
      />

      <h1 className="page-title">Ships & Vessels</h1>

      <div className="stats-row">
        <StatCard
          icon="🚢"
          title="Total Ships"
          value="3"
          iconBg="primary"
        />
        <StatCard
          icon="👥"
          title="Total Capacity"
          value="7,000"
          subtitle="guests"
          iconBg="danger"
        />
        <StatCard
          icon="🛏️"
          title="Total Cabins"
          value="3,500"
          iconBg="warning"
        />
        <StatCard
          icon="✅"
          title="Active Ships"
          value="2"
          iconBg="success"
        />
      </div>

      <Toolbar
        leftContent={
          <>
            <button className="btn btn-primary">➕ Add Ship</button>
            <select>
              <option>All Status</option>
              <option>Active</option>
              <option>Maintenance</option>
            </select>
            <select>
              <option>Any Capacity</option>
              <option>Small (0-500)</option>
              <option>Medium (500-1500)</option>
              <option>Large (1500+)</option>
            </select>
          </>
        }
        rightContent={
          <>
            <button className="btn btn-secondary">🖨️ Print</button>
            <button className="btn btn-secondary">📥 Export</button>
          </>
        }
      />

      <div className="card">
        <div className="card-body">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Ship Name</th>
                  <th>Capacity</th>
                  <th>Decks</th>
                  <th>Cabins</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ships.map(ship => (
                  <tr key={ship.id}>
                    <td>
                      <div className="ship-cell">
                        <div className="ship-thumbnail">{ship.icon}</div>
                        <div className="ship-info">
                          <strong>{ship.name}</strong>
                          <div className="ship-meta">ID: {ship.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>{ship.capacity.toLocaleString()} guests</td>
                    <td>{ship.decks}</td>
                    <td>{ship.cabins.toLocaleString()}</td>
                    <td>
                      <span className={`badge badge-${ship.status === 'Active' ? 'success' : 'warning'}`}>
                        {ship.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => handleViewDecks(ship)}
                        >
                          📋 View Decks
                        </button>
                        <button className="btn btn-secondary btn-sm">✏️ Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipsList;
