import { ReactNode } from 'react';

export interface MenuItemProps {
  icon: ReactNode;
  key: string;
  text?: string;
  route?: string;
}

export interface MenuSectionProps {
  title: string | null;
  items: MenuItemProps[];
}
