import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)
      },
      {
        path: 'marketing',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)
      },
      {
        path: 'crm',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'stocks',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'saas',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)
      },
      {
        path: 'calendar',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'user-profile',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'task',
        loadComponent: () => import('./page.component').then(m => m.PageComponent),
        children: [
          {
            path: 'list',
            loadComponent: () => import('./page.component').then(m => m.PageComponent),
          },
          {
            path: 'kanban',
            loadComponent: () => import('./page.component').then(m => m.PageComponent),
          },
        ]
      },
      {
        path: 'forms',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'tables',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'pages',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'chat',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      },
      {
        path: 'email',
        loadComponent: () => import('./page.component').then(m => m.PageComponent)

      }
    ]
  },
  {
    path: '**',
    redirectTo: 'blank-page'
  }
];