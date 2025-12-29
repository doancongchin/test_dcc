
import React from "react"; 

export type SubMenuItem = {
  title: string;
  url: string;
  icon?: React.ElementType;
};

export type MenuItem = {
  title: string;
  url: string;
  icon: React.ElementType;
  items?: SubMenuItem[];    
  isActive?: boolean;    
};