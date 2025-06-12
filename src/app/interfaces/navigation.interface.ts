export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  children?: NavigationItem[];
  badge?: 'PRO' | 'NEW';
  isExpanded?: boolean;
}
