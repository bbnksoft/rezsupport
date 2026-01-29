import React from "react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.path ? (
            <a href={item.path}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
