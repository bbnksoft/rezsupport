import React from 'react';

interface StatCardProps {
  icon?: string;
  title: string;
  value: string | number;
  subtitle?: string;
  iconBg?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, iconBg }) => {
  return (
    <div className={`stat-card ${iconBg ? `stat-card-${iconBg}` : ''}`}>
      {icon && <div className="stat-card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{value}</p>
      {subtitle && <span className="stat-card-subtitle">{subtitle}</span>}
    </div>
  );
};

export default StatCard;
