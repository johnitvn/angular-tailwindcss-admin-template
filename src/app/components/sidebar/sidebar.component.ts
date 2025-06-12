import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { navigationItems, secondaryNavigationItems, supportNavigationItems } from '../../data/navigation.data';
import { NavigationItem } from '../../interfaces/navigation.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Mobile overlay -->
    <div 
      *ngIf="layoutService.sidebarOpen()" 
      class="mobile-overlay"
      (click)="layoutService.closeSidebar()">
    </div>

    <!-- Sidebar -->
    <aside 
      class="fixed left-0 top-0 z-50 h-screen w-64 transform bg-dark-800 border-r border-dark-700 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto"
      [class.translate-x-0]="layoutService.sidebarOpen()"
      [class.-translate-x-full]="!layoutService.sidebarOpen()"
      [class.lg:w-16]="layoutService.sidebarCollapsed()"
      [class.lg:w-64]="!layoutService.sidebarCollapsed()">
      
      <!-- Sidebar Header -->
      <header class="flex items-center justify-between border-b border-dark-700">
        <div class="flex items-center w-full h-[4.5rem]" [ngClass]="{'justify-center':layoutService.sidebarCollapsed(), 'lg:h-20 gap-3 px-4 py-4 ':!layoutService.sidebarCollapsed()}">
          <div class="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <span 
            *ngIf="!layoutService.sidebarCollapsed()" 
            class="text-xl font-bold text-white">
            TailAdmin
          </span>
        </div>        
      </header>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-6" [ngClass]="{'px-4':!layoutService.sidebarCollapsed()}">
        <!-- Menu Label -->
        <div *ngIf="!layoutService.sidebarCollapsed()" class="mb-4">
          <span class="text-xs font-semibold text-dark-400 uppercase tracking-wider">MENU</span>
        </div>

        <!-- Primary Navigation -->
        <ul class="space-y-2 mb-8">
          <li *ngFor="let item of primaryNavItems">
            <div [ngClass]="{'flex justify-center':layoutService.sidebarCollapsed()}">
              <ng-container *ngIf="!item.children || item.children.length === 0; else hasChildren">
                <a 
                  [routerLink]="item.route"
                  class="sidebar-item group"
                  [class.active]="isMenuItemActive(item)"
                  [title]="layoutService.sidebarCollapsed() ? item.title : ''">
                  
                  <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                  
                  <span *ngIf="!layoutService.sidebarCollapsed()" class="flex-1">
                    {{ item.title }}
                  </span>
                  
                  <span *ngIf="item.badge && !layoutService.sidebarCollapsed()" 
                        [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                    {{ item.badge }}
                  </span>
                </a>
              </ng-container>

              <ng-template #hasChildren>
                <div class="w-full">
                  <button 
                    (click)="toggleSubmenu(item.id)"
                    class="sidebar-item group w-full"
                    [class.active]="isParentMenuActive(item) || layoutService.isMenuExpanded(item.id)"
                    [title]="layoutService.sidebarCollapsed() ? item.title : ''">
                    
                    <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                    
                    <span *ngIf="!layoutService.sidebarCollapsed()" class="flex-1 text-left">
                      {{ item.title }}
                    </span>
                    
                    <span *ngIf="item.badge && !layoutService.sidebarCollapsed()" 
                          [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                      {{ item.badge }}
                    </span>
                    
                    <svg *ngIf="!layoutService.sidebarCollapsed()"
                         class="w-4 h-4 transition-transform duration-200"
                         [class.rotate-90]="layoutService.isMenuExpanded(item.id)"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </button>

                  <!-- Submenu -->
                  <div *ngIf="layoutService.isMenuExpanded(item.id) && !layoutService.sidebarCollapsed()" 
                       class="submenu-container">
                    <ul class="submenu">
                      <li *ngFor="let child of item.children">
                        <a 
                          [routerLink]="child.route"
                          class="submenu-item"
                          [class.active]="isMenuItemActive(child)">
                          {{ child.title }}
                          <span *ngIf="child.badge" 
                                [class]="child.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                            {{ child.badge }}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ng-template>
            </div>
          </li>
        </ul>

        <!-- Secondary Navigation -->
        <ul class="space-y-2 mb-8">
          <li *ngFor="let item of secondaryNavItems">
            <div [ngClass]="{'flex justify-center':layoutService.sidebarCollapsed()}">
              <ng-container *ngIf="!item.children || item.children.length === 0; else hasSecondaryChildren">
                <a 
                  [routerLink]="item.route"
                  class="sidebar-item"
                  [class.active]="isMenuItemActive(item)"
                  [title]="layoutService.sidebarCollapsed() ? item.title : ''">
                  
                  <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                  
                  <span *ngIf="!layoutService.sidebarCollapsed()" class="flex-1">
                    {{ item.title }}
                  </span>
                  
                  <span *ngIf="item.badge && !layoutService.sidebarCollapsed()" 
                        [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                    {{ item.badge }}
                  </span>
                </a>
              </ng-container>

              <ng-template #hasSecondaryChildren>
                <div class="w-full">
                  <button 
                    (click)="toggleSubmenu(item.id)"
                    class="sidebar-item group w-full"
                    [class.active]="isParentMenuActive(item) || layoutService.isMenuExpanded(item.id)"
                    [title]="layoutService.sidebarCollapsed() ? item.title : ''">
                    
                    <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                    
                    <span *ngIf="!layoutService.sidebarCollapsed()" class="flex-1 text-left">
                      {{ item.title }}
                    </span>
                    
                    <span *ngIf="item.badge && !layoutService.sidebarCollapsed()" 
                          [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                      {{ item.badge }}
                    </span>
                    
                    <svg *ngIf="!layoutService.sidebarCollapsed()"
                         class="w-4 h-4 transition-transform duration-200"
                         [class.rotate-90]="layoutService.isMenuExpanded(item.id)"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </button>

                  <!-- Submenu -->
                  <div *ngIf="layoutService.isMenuExpanded(item.id) && !layoutService.sidebarCollapsed()" 
                       class="submenu-container">
                    <ul class="submenu">
                      <li *ngFor="let child of item.children">
                        <a 
                          [routerLink]="child.route"
                          class="submenu-item"
                          [class.active]="isMenuItemActive(child)">
                          {{ child.title }}
                          <span *ngIf="child.badge" 
                                [class]="child.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                            {{ child.badge }}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ng-template>
            </div>
          </li>
        </ul>

        <!-- Support Section -->
        <div *ngIf="!layoutService.sidebarCollapsed()" class="mb-4">
          <span class="text-xs font-semibold text-dark-400 uppercase tracking-wider">SUPPORT</span>
        </div>
        
        <ul class="space-y-2">
          <li *ngFor="let item of supportNavItems">
            <div [ngClass]="{'flex justify-center':layoutService.sidebarCollapsed()}">
              <ng-container *ngIf="!item.children || item.children.length === 0; else hasSupportChildren">
                <a 
                  [routerLink]="item.route"
                  class="sidebar-item"
                  [class.active]="isMenuItemActive(item)"
                  [title]="layoutService.sidebarCollapsed() ? item.title : ''">
                  
                  <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                  
                  <span *ngIf="!layoutService.sidebarCollapsed()" class="flex-1">
                    {{ item.title }}
                  </span>
                  
                  <span *ngIf="item.badge && !layoutService.sidebarCollapsed()" 
                        [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                    {{ item.badge }}
                  </span>
                </a>
              </ng-container>

              <ng-template #hasSupportChildren>
                <div class="w-full">
                  <button 
                    (click)="toggleSubmenu(item.id)"
                    class="sidebar-item group w-full"
                    [class.active]="isParentMenuActive(item) || layoutService.isMenuExpanded(item.id)"
                    [title]="layoutService.sidebarCollapsed() ? item.title : ''">
                    
                    <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                    
                    <span *ngIf="!layoutService.sidebarCollapsed()" class="flex-1 text-left">
                      {{ item.title }}
                    </span>
                    
                    <span *ngIf="item.badge && !layoutService.sidebarCollapsed()" 
                          [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                      {{ item.badge }}
                    </span>
                    
                    <svg *ngIf="!layoutService.sidebarCollapsed()"
                         class="w-4 h-4 transition-transform duration-200"
                         [class.rotate-90]="layoutService.isMenuExpanded(item.id)"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </button>

                  <!-- Submenu -->
                  <div *ngIf="layoutService.isMenuExpanded(item.id) && !layoutService.sidebarCollapsed()" 
                       class="submenu-container">
                    <ul class="submenu">
                      <li *ngFor="let child of item.children">
                        <a 
                          [routerLink]="child.route"
                          class="submenu-item"
                          [class.active]="isMenuItemActive(child)">
                          {{ child.title }}
                          <span *ngIf="child.badge" 
                                [class]="child.badge === 'PRO' ? 'pro-badge' : 'new-badge'">
                            {{ child.badge }}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ng-template>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar-item {
      @apply flex items-center gap-3 px-4 py-3 rounded-lg text-dark-300 hover:bg-dark-700 hover:text-white transition-all duration-200 cursor-pointer;
    }

    .sidebar-item.active {
      @apply bg-primary-600 text-white relative;
      box-shadow: 0 4px 8px rgba(59, 130, 246, 0.2);
    }
    
    .sidebar-item.active::before {
      content: '';
      @apply absolute left-0 top-0 w-1 h-full bg-primary-400 rounded-r-full;
    }
    
    .sidebar-item:hover {
      @apply bg-dark-700 text-white;
    }
    
    .sidebar-item svg {
      transition: all 0.2s ease;
    }
    
    .sidebar-item:hover svg {
      @apply text-primary-400;
    }

    .submenu-container {
      @apply overflow-hidden;
      animation: slideDown 0.3s ease-out;
    }

    .submenu {
      @apply mt-2 space-y-1;
    }

    .submenu-item {
      @apply flex items-center justify-between px-4 py-2 ml-6 text-sm text-dark-400 hover:text-white hover:bg-dark-700 rounded-lg transition-all duration-200 cursor-pointer;
    }

    .submenu-item.active {
      @apply bg-primary-600/20 text-primary-400 border-l-2 border-primary-400;
    }

    .submenu-item:hover {
      @apply bg-dark-700 text-white;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        max-height: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        max-height: 200px;
        transform: translateY(0);
      }
    }

    .pro-badge {
      @apply bg-primary-600 text-white text-xs px-2 py-1 rounded-md font-medium;
    }

    .new-badge {
      @apply bg-green-600 text-white text-xs px-2 py-1 rounded-md font-medium;
    }
  `]
})
export class SidebarComponent implements OnInit {
  layoutService = inject(LayoutService);
  sanitizer = inject(DomSanitizer);
  
  primaryNavItems: NavigationItem[] = navigationItems;
  secondaryNavItems: NavigationItem[] = secondaryNavigationItems;
  supportNavItems: NavigationItem[] = supportNavigationItems;

  ngOnInit() {
    // Refresh menu state on component initialization
    this.layoutService.refreshMenuState();
  }

  toggleSubmenu(menuId: string) {
    // Don't toggle if sidebar is collapsed
    if (this.layoutService.sidebarCollapsed()) {
      return;
    }
    this.layoutService.toggleMenu(menuId);
  }

  /**
   * Check if a menu item is active based on current URL
   */
  isMenuItemActive(item: NavigationItem): boolean {
    return this.layoutService.isMenuItemActive(item.route);
  }

  /**
   * Check if a parent menu has active children
   */
  isParentMenuActive(item: NavigationItem): boolean {
    return this.layoutService.isParentMenuActive(item.children);
  }
}