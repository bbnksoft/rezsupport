import React, { useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import Toolbar from "../layout/Toolbar";
import { Ship } from "../../types/ship.types";
import { Deck } from "../../types/deck.types";
import { Cabin } from "../../types/cabin.types";

interface CabinManagementProps {
  ship: Ship | null;
  deck: Deck | null;
  onPageChange: (page: string) => void;
}

const CabinManagement: React.FC<CabinManagementProps> = ({
  ship,
  deck,
  onPageChange,
}) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const cabins: Cabin[] = [
    { id: "11001", type: "Oceanview", status: "available", price: 899 },
    { id: "11002", type: "Oceanview", status: "available", price: 899 },
    {
      id: "11003",
      type: "Oceanview",
      status: "booked",
      price: 899,
      guest: "John Smith",
    },
    { id: "11004", type: "Oceanview", status: "available", price: 899 },
    { id: "11005", type: "VIP Suite", status: "vip", price: 1299 },
    { id: "11006", type: "Interior", status: "available", price: 699 },
    { id: "11007", type: "Interior", status: "maintenance", price: 699 },
    { id: "11008", type: "Balcony", status: "available", price: 1099 },
    { id: "11009", type: "Balcony", status: "booked", price: 1099 },
    { id: "11010", type: "Suite", status: "available", price: 1499 },
  ];

  if (!ship || !deck) {
    return <div>No ship or deck selected</div>;
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Inventory", path: "/inventory" },
          { label: "Ships" },
          { label: ship.name },
          { label: `Deck ${deck.id || 11}` },
          { label: "Cabins" },
        ]}
      />

      <h1 className="page-title">Deck 11 - Cabins & Spa</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ fontSize: "14px", color: "#7E8299" }}>
          Total Cabins: 100 | Available: 25 | Booked: 73 | Maintenance: 2
        </div>
      </div>

      <Toolbar
        leftContent={
          <>
            <button className="btn btn-primary">➕ Add Cabin</button>
            <select>
              <option>All Decks</option>
              <option>Deck 12</option>
              <option>Deck 11</option>
              <option>Deck 10</option>
            </select>
            <select>
              <option>All Types</option>
              <option>Interior</option>
              <option>Oceanview</option>
              <option>Balcony</option>
              <option>Suite</option>
            </select>
            <select>
              <option>All Statuses</option>
              <option>Available</option>
              <option>Booked</option>
              <option>Maintenance</option>
            </select>
          </>
        }
        rightContent={
          <div
            style={{
              display: "flex",
              gap: "5px",
              background: "#F1F5F9",
              padding: "4px",
              borderRadius: "6px",
              border: "1px solid #E2E8F0",
            }}
          >
            <button
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
              style={{
                padding: "6px 12px",
                background: viewMode === "grid" ? "white" : "transparent",
                border: viewMode === "grid" ? "1px solid #E2E8F0" : "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                color: viewMode === "grid" ? "#475569" : "#64748B",
              }}
            >
              ▦ Grid
            </button>
            <button
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
              style={{
                padding: "6px 12px",
                background: viewMode === "list" ? "white" : "transparent",
                border: viewMode === "list" ? "1px solid #E2E8F0" : "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                color: viewMode === "list" ? "#475569" : "#64748B",
              }}
            >
              ☰ List
            </button>
          </div>
        }
      />

      {viewMode === "grid" ? (
        <div className="card">
          <div className="card-body">
            <h4 style={{ marginBottom: "20px" }}>Visual Deck Map</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "15px",
                margin: "20px 0",
              }}
            >
              {cabins.map((cabin) => (
                <div
                  key={cabin.id}
                  style={{
                    background:
                      cabin.status === "available"
                        ? "#F0FDF4"
                        : cabin.status === "booked"
                          ? "#EFF6FF"
                          : cabin.status === "vip"
                            ? "#FEFCE8"
                            : "#FEF2F2",
                    borderRadius: "8px",
                    padding: "15px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    border:
                      cabin.status === "available"
                        ? "2px solid #BBF7D0"
                        : cabin.status === "booked"
                          ? "2px solid #BFDBFE"
                          : cabin.status === "vip"
                            ? "2px solid #FDE68A"
                            : "2px solid #FECACA",
                    opacity: cabin.status === "maintenance" ? 0.75 : 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "#0F172A",
                    }}
                  >
                    {cabin.id}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748B",
                      marginBottom: "8px",
                    }}
                  >
                    {cabin.type}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    {cabin.status === "booked"
                      ? "BOOKED"
                      : cabin.status === "maintenance"
                        ? "MAINT"
                        : `$${cabin.price}`}
                  </div>
                  {cabin.guest && (
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#7E8299",
                        marginTop: "4px",
                      }}
                    >
                      {cabin.guest}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "30px",
                padding: "15px",
                background: "#F9F9F9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "13px",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#50CD89",
                      borderRadius: "2px",
                    }}
                  ></div>
                  <span>Available</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#3699FF",
                      borderRadius: "2px",
                    }}
                  ></div>
                  <span>Booked</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#FFC700",
                      borderRadius: "2px",
                    }}
                  ></div>
                  <span>VIP</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#F1416C",
                      borderRadius: "2px",
                    }}
                  ></div>
                  <span>Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Cabin #</th>
                    <th>Deck</th>
                    <th>Type</th>
                    <th>Capacity</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Guest</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cabins.map((cabin) => (
                    <tr key={cabin.id}>
                      <td>
                        <strong>{cabin.id}</strong>
                      </td>
                      <td>11</td>
                      <td>{cabin.type}</td>
                      <td>2 guests</td>
                      <td>${cabin.price}</td>
                      <td>
                        <span
                          className={`badge badge-${
                            cabin.status === "available"
                              ? "success"
                              : cabin.status === "booked"
                                ? "primary"
                                : cabin.status === "vip"
                                  ? "warning"
                                  : "danger"
                          }`}
                        >
                          {cabin.status}
                        </span>
                      </td>
                      <td>{cabin.guest || "-"}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn btn-primary btn-sm">
                            👁️ View
                          </button>
                          <button className="btn btn-secondary btn-sm">
                            ✏️ Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CabinManagement;
