import React, { useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import { Ship } from "../../types/ship.types";
import { Deck } from "../../types/deck.types";

interface DeckManagementProps {
  ship: Ship | null;
  onPageChange: (page: string) => void;
  onDeckSelect: (deck: Deck) => void;
}

const DeckManagement: React.FC<DeckManagementProps> = ({
  ship,
  onPageChange,
  onDeckSelect,
}) => {
  const decks: Deck[] = [
    {
      id: 12,
      name: "Deck 12 - Pool & Events",
      cabins: 20,
      function: "Entertainment",
    },
    {
      id: 11,
      name: "Deck 11 - Cabins & Spa",
      cabins: 100,
      function: "Guest Cabins",
    },
    { id: 10, name: "Deck 10 - Cabins", cabins: 150, function: "Guest Cabins" },
    { id: 9, name: "Deck 9 - Main Dining", cabins: 80, function: "Dining" },
    { id: 8, name: "Deck 8 - Theaters", cabins: 50, function: "Entertainment" },
  ];

  const [activeDeck, setActiveDeck] = useState<Deck | null>(decks[1]);

  const handleDeckSelect = (deck: Deck) => {
    setActiveDeck(deck);
  };

  const handleViewCabins = (deck: Deck) => {
    onDeckSelect(deck);
    onPageChange("cabin-management");
  };

  if (!ship) {
    return <div>No ship selected</div>;
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Inventory", path: "/inventory" },
          { label: "Ships & Vessels" },
          { label: ship.name },
          { label: "Decks" },
        ]}
      />

      <h1 className="page-title">{ship.name} - Deck Management</h1>

      <div className="card" style={{ marginBottom: "20px" }}>
        <div className="card-body">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ fontSize: "48px" }}>{ship.icon}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: "10px" }}>{ship.name}</h3>
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  fontSize: "14px",
                  color: "#7E8299",
                }}
              >
                <span>Capacity: {ship.capacity.toLocaleString()} guests</span>
                <span>Decks: {ship.decks}</span>
                <span>Cabins: {ship.cabins.toLocaleString()}</span>
                <span>
                  Status:{" "}
                  <span
                    className={`badge badge-${ship.status === "Active" ? "success" : "warning"}`}
                  >
                    {ship.status}
                  </span>
                </span>
              </div>
            </div>
            <button className="btn btn-secondary">Edit Ship</button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          gap: "20px",
        }}
      >
        <div className="card">
          <div className="card-body">
            <h4 style={{ marginBottom: "15px", fontSize: "16px" }}>Decks</h4>
            {decks.map((deck) => (
              <div
                key={deck.id}
                className={`deck-item ${activeDeck?.id === deck.id ? "active" : ""}`}
                onClick={() => handleDeckSelect(deck)}
                style={{
                  padding: "12px",
                  borderLeft:
                    activeDeck?.id === deck.id
                      ? "3px solid #475569"
                      : "3px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  background:
                    activeDeck?.id === deck.id ? "#F1F5F9" : "transparent",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                    marginBottom: "4px",
                  }}
                >
                  Deck {deck.id}
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  {deck.name.split(" - ")[1]} • {deck.cabins} cabins
                </div>
              </div>
            ))}
            <button
              className="btn btn-primary"
              style={{ marginTop: "15px", width: "100%" }}
            >
              ➕ Add Deck
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 style={{ marginBottom: "20px" }}>
              {activeDeck ? activeDeck.name : "Select a deck to view details"}
            </h3>

            {activeDeck && (
              <>
                <div
                  style={{
                    background: "#F8FAFC",
                    borderRadius: "8px",
                    padding: "30px",
                    margin: "20px 0",
                    minHeight: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #E2E8F0",
                  }}
                >
                  <div style={{ textAlign: "center", color: "#7E8299" }}>
                    <div style={{ fontSize: "64px", marginBottom: "10px" }}>
                      🗺️
                    </div>
                    <div>Deck Plan Visualization</div>
                    <div style={{ fontSize: "12px", marginTop: "5px" }}>
                      Interactive deck layout would display here
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#50CD89",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <span>Available</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#3699FF",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <span>Occupied</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#FFC700",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <span>VIP</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#F1416C",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <span>Maintenance</span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "30px",
                    padding: "20px",
                    background: "#F9F9F9",
                    borderRadius: "8px",
                  }}
                >
                  <h4
                    style={{
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "#7E8299",
                    }}
                  >
                    Deck Details
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "12px", color: "#7E8299" }}>
                        Deck Number
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 600 }}>
                        {activeDeck.id}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#7E8299" }}>
                        Total Cabins
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 600 }}>
                        {activeDeck.cabins}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#7E8299" }}>
                        Primary Function
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 600 }}>
                        {activeDeck.function}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#7E8299" }}>
                        Available
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 600 }}>
                        25
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ marginTop: "20px", display: "flex", gap: "10px" }}
                  >
                    <button className="btn btn-primary">Edit Deck</button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleViewCabins(activeDeck)}
                    >
                      View Cabins
                    </button>
                    <button className="btn btn-secondary">
                      Upload Deck Plan
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeckManagement;
