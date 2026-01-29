import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  activeModule: string;
  activePage: string;
  onModuleChange: (moduleId: string) => void;
  onPageChange: (page: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeModule,
  activePage,
  onModuleChange,
  onPageChange,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="main-layout">
      <Header
        activeModule={activeModule}
        onModuleChange={onModuleChange}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="layout-body">
        <Sidebar
          collapsed={sidebarCollapsed}
          mobileOpen={mobileMenuOpen}
          onCollapse={setSidebarCollapsed}
          onMobileToggle={setMobileMenuOpen}
          activePage={activePage}
          onPageChange={onPageChange}
        />

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
