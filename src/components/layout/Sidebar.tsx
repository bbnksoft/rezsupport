import React, { Dispatch, SetStateAction, useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  page?: string;
  submenu?: { id: string; label: string }[];
}

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCollapse: Dispatch<SetStateAction<boolean>>;
  onMobileToggle: Dispatch<SetStateAction<boolean>>;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  mobileOpen,
  onCollapse,
  onMobileToggle,
  activePage,
  onPageChange,
}) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {},
  );

  const inventoryMenu: MenuItem[] = [
    {
      id: "ships",
      label: "Ships & Vessels",
      icon: "🚢",
      badge: "3",
      page: "ships-list",
    },
    { id: "decks", label: "Decks & Spaces", icon: "🏢", page: "decks-list" },
    {
      id: "cabins",
      label: "Cabins & Rooms",
      icon: "🛏️",
      badge: "1,100",
      page: "cabins-list",
    },
    {
      id: "supplies",
      label: "Event Supplies",
      icon: "📦",
      submenu: [
        { id: "equipment", label: "Equipment" },
        { id: "furnishings", label: "Furnishings" },
        { id: "hospitality", label: "Hospitality" },
      ],
    },
    {
      id: "merchandise",
      label: "Merchandise",
      icon: "🎁",
      submenu: [
        { id: "branded", label: "Branded" },
        { id: "artist", label: "Artist" },
        { id: "sales", label: "Sales Data" },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: "📊",
      submenu: [
        { id: "summary", label: "Summary" },
        { id: "utilization", label: "Utilization" },
        { id: "reorder", label: "Reorder Tracking" },
      ],
    },
  ];

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <aside
      className={`left-sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}
    >
      <div className="sidebar-section">
        <div className="section-title">Inventory Management</div>
        <ul className="menu-items">
          {inventoryMenu.slice(0, 3).map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activePage === item.page ? "active" : ""}`}
              onClick={() => item.page && onPageChange(item.page)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
              {item.badge && <span className="menu-badge">{item.badge}</span>}
            </li>
          ))}

          {inventoryMenu.slice(3).map((item) => (
            <React.Fragment key={item.id}>
              <li className="menu-item" onClick={() => toggleMenu(item.id)}>
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
                {item.submenu && (
                  <span
                    className={`expand-icon ${expandedMenus[item.id] ? "expanded" : ""}`}
                  >
                    ›
                  </span>
                )}
              </li>
              {item.submenu && (
                <ul
                  className={`submenu ${expandedMenus[item.id] ? "open" : ""}`}
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.id} className="menu-item">
                      <span className="menu-label">{sub.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="collapse-btn">
        <button onClick={() => onCollapse(!collapsed)}>
          {collapsed ? "›" : "‹"} {!collapsed && "Collapse"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
