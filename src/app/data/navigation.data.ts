import { NavigationItem } from '../interfaces/navigation.interface';

export const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
    </svg>`,
    route: '/dashboard',
    children: [
      { id: 'ecommerce', title: 'eCommerce', icon: '', route: '/dashboard/ecommerce' }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
    </svg>`,
    route: '/analytics',
    badge: 'PRO'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
    </svg>`,
    route: '/marketing',
    badge: 'PRO'
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    route: '/crm',
    badge: 'PRO'
  },
  {
    id: 'stocks',
    title: 'Stocks',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
    </svg>`,
    route: '/stocks',
    badge: 'NEW'
  },
  {
    id: 'saas',
    title: 'SaaS',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
      <path fill-rule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 3a1 1 0 00-2 0V9a1 1 0 00-1 1v1H7a1 1 0 000 2h1v1a1 1 0 001 1v1a1 1 0 002 0v-1a1 1 0 001-1v-1h1a1 1 0 000-2h-1V9a1 1 0 00-1-1v1z" clip-rule="evenodd"/>
    </svg>`,
    route: '/saas',
    badge: 'NEW'
  }
];

export const secondaryNavigationItems: NavigationItem[] = [
  {
    id: 'calendar',
    title: 'Calendar',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
    </svg>`,
    route: '/calendar'
  },
  {
    id: 'user-profile',
    title: 'User Profile',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
    </svg>`,
    route: '/user-profile'
  },
  {
    id: 'task',
    title: 'Task',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clip-rule="evenodd"/>
    </svg>`,
    route: '/task',
    children: [
      { id: 'list', title: 'List', icon: '', route: '/task/list', badge: 'PRO' },
      { id: 'kanban', title: 'Kanban', icon: '', route: '/task/kanban', badge: 'PRO' }
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
    </svg>`,
    route: '/forms',
    children: []
  },
  {
    id: 'tables',
    title: 'Tables',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"/>
    </svg>`,
    route: '/tables',
    children: []
  },
  {
    id: 'pages',
    title: 'Pages',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
    </svg>`,
    route: '/pages',
    children: []
  }
];

export const supportNavigationItems: NavigationItem[] = [
  {
    id: 'chat',
    title: 'Chat',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
    </svg>`,
    route: '/chat'
  },
  {
    id: 'email',
    title: 'Email',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>`,
    route: '/email',
    children: []
  }
];