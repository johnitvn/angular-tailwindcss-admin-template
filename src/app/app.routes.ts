import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'blank-page',
        pathMatch: 'full'
      },
      {
        path: 'blank-page',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'marketing',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'crm',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'stocks',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'saas',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'calendar',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'user-profile',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'task',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'task/list',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'task/kanban',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'forms',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'tables',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'pages',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'chat',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      },
      {
        path: 'email',
        loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'blank-page'
  }
];