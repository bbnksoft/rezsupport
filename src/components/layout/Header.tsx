import React from "react";

interface Module {
  id: string;
  label: string;
  icon: string;
}

interface HeaderProps {
  activeModule: string;
  onModuleChange: (moduleId: string) => void;
  onMobileMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeModule,
  onModuleChange,
  onMobileMenuToggle,
}) => {
  const modules: Module[] = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "booking", label: "Booking", icon: "📋" },
    { id: "inventory", label: "Inventory", icon: "📦" },
    { id: "participants", label: "Participants", icon: "👥" },
    { id: "operations", label: "Operations", icon: "⚙️" },
    { id: "admin", label: "Admin", icon: "🔧" },
    { id: "reports", label: "Reports", icon: "📊" },
  ];

  return (
    <header className="top-nav">
      <div className="hamburger" onClick={onMobileMenuToggle}>
        ☰
      </div>
      <div className="nav-brand">
        <div className="nav-brand-icon">🎫</div>
        REZsupport
      </div>

      <nav className="main-modules">
        {modules.map((module) => (
          <a
            key={module.id}
            className={`module-link ${activeModule === module.id ? "active" : ""}`}
            onClick={() => onModuleChange(module.id)}
          >
            <span>{module.icon}</span>
            <span>{module.label}</span>
          </a>
        ))}
      </nav>

      <div className="nav-utilities">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <button className="icon-btn">
          🔔
          <span className="badge">3</span>
        </button>
        <button className="icon-btn">
          📧
          <span className="badge">5</span>
        </button>
        <div className="user-menu">
          <div className="user-avatar">PM</div>
          <div className="user-info">
            <div className="user-name">Product Manager</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
