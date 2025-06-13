import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { navigationItems, secondaryNavigationItems, supportNavigationItems } from '../../data/navigation.data';
import { NavigationItem } from '../../interfaces/navigation.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <!-- Mobile Overlay - Positioned absolutely to cover everything -->
    <div 
      *ngIf="layoutService.sidebarOpen() && isSmallScreen" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
      (click)="layoutService.closeSidebar()">
    </div>

    <!-- Main Container - Full viewport height -->
    <div class="min-h-screen bg-dark-900 flex flex-col">
      
      <!-- Header - Fixed height, full width -->
      <header class="h-16 bg-dark-800 border-b border-dark-700 flex-shrink-0 relative z-30">
        <div class="flex items-center justify-between h-full px-4 lg:px-6">
          <!-- Left section -->
          <div class="flex items-center gap-4">
            <!-- Mobile menu button -->
            <button 
              (click)="layoutService.toggleSidebar()"
              class="lg:hidden p-2 rounded-lg hover:bg-dark-700 text-dark-300 hover:text-white transition-colors focus-ring">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>

            <!-- Desktop collapse button -->
            <button 
              (click)="layoutService.toggleCollapse()"
              class="hidden lg:block p-2 rounded-lg hover:bg-dark-700 text-dark-300 hover:text-white transition-colors focus-ring">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>

            <!-- Search -->
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-dark-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search or type command..."
                class="w-96 pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd class="bg-dark-600 text-dark-300 px-2 py-1 rounded text-xs font-mono">⌘K</kbd>
              </div>
            </div>
          </div>

          <!-- Right section -->
          <div class="flex items-center gap-3">
            <!-- Theme toggle -->
            <button class="p-2 rounded-lg hover:bg-dark-700 text-dark-300 hover:text-white transition-colors focus-ring">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>

            <!-- Notifications -->
            <div class="relative">
              <button class="p-2 rounded-lg hover:bg-dark-700 text-dark-300 hover:text-white transition-colors focus-ring">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
              <!-- Notification dot -->
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span class="text-xs text-white font-medium">1</span>
              </div>
            </div>

            <!-- User profile -->
            <div class="relative">
              <button class="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-700 transition-colors focus-ring">
                <img 
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40&h=40&fit=crop&crop=face" 
                  alt="User avatar" 
                  class="w-8 h-8 rounded-full object-cover">
                <div class="hidden sm:block text-left">
                  <div class="text-sm font-medium text-white">Musharof</div>
                  <div class="text-xs text-dark-400">Admin</div>
                </div>
                <svg class="hidden sm:block w-4 h-4 text-dark-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Content Area - Flex container for sidebar and main content -->
      <div class="flex flex-1 relative overflow-hidden">
        
        <!-- Sidebar - Responsive positioning -->
        <aside 
          class="bg-dark-800 border-r border-dark-700 flex flex-col transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0"
          [ngClass]="{
            'lg:w-64': !layoutService.sidebarCollapsed() || isHovered,
            'lg:w-16': layoutService.sidebarCollapsed() && !isHovered,
            'lg:shadow-2xl lg:shadow-primary-500/10': layoutService.sidebarCollapsed() && isHovered,
            'lg:relative lg:z-auto': true,            
            'fixed top-0 left-0 h-full w-64 z-50': isSmallScreen,
            'transform -translate-x-full': isSmallScreen && !layoutService.sidebarOpen(),
            'transform translate-x-0': isSmallScreen && layoutService.sidebarOpen()
          }"
          (mouseenter)="onMouseEnter()"
          (mouseleave)="onMouseLeave()">
          
          <!-- Sidebar Header -->
          <header class="flex items-center justify-between border-b border-dark-700 flex-shrink-0">
            <div class="flex items-center w-full h-16 transition-all duration-300" 
                 [ngClass]="{
                   'justify-center': layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen, 
                   'gap-3 px-4 py-4': !layoutService.sidebarCollapsed() || isHovered || isSmallScreen
                 }">
              <div class="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span 
                class="text-xl font-bold text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
                [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                [class.ml-3]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen">
                TailAdmin
              </span>
            </div>        
          </header>

          <!-- Navigation - Scrollable -->
          <nav class="flex-1 overflow-y-auto py-6 transition-all duration-300" 
               [ngClass]="{
                 'px-4': !layoutService.sidebarCollapsed() || isHovered || isSmallScreen, 
                 'px-2': layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen
               }">
            
            <!-- Menu Label -->
            <div class="mb-4 transition-all duration-300 overflow-hidden"
                 [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                 [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                 [class.h-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                 [class.h-auto]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen">
              <span class="text-xs font-semibold text-dark-400 uppercase tracking-wider">MENU</span>
            </div>

            <!-- Primary Navigation -->
            <ul class="space-y-2 mb-8">
              <li *ngFor="let item of primaryNavItems">
                <div [ngClass]="{'flex justify-center': layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen}">
                  <ng-container *ngIf="!item.children || item.children.length === 0; else hasChildren">
                    <a 
                      [routerLink]="item.route"
                      class="sidebar-item group transition-all duration-300"
                      [class.active]="isMenuItemActive(item)"
                      [class.justify-center]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [class.w-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [class.h-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [title]="(layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen) ? item.title : ''"
                      (click)="onMenuItemClick()">
                      
                      <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                      
                      <span class="flex-1 transition-all duration-300 overflow-hidden whitespace-nowrap"
                            [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                            [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                        {{ item.title }}
                      </span>
                      
                      <span *ngIf="item.badge" 
                            class="transition-all duration-300 overflow-hidden whitespace-nowrap"
                            [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'"
                            [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                            [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                        {{ item.badge }}
                      </span>
                    </a>
                  </ng-container>

                  <ng-template #hasChildren>
                    <div class="w-full">
                      <button 
                        (click)="toggleSubmenu(item.id)"
                        class="sidebar-item group w-full transition-all duration-300"
                        [class.active]="isParentMenuActive(item) || layoutService.isMenuExpanded(item.id)"
                        [class.justify-center]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [class.w-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [class.h-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [title]="(layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen) ? item.title : ''">
                        
                        <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                        
                        <span class="flex-1 text-left transition-all duration-300 overflow-hidden whitespace-nowrap"
                              [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                              [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                          {{ item.title }}
                        </span>
                        
                        <span *ngIf="item.badge" 
                              class="transition-all duration-300 overflow-hidden whitespace-nowrap"
                              [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'"
                              [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                              [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                          {{ item.badge }}
                        </span>
                        
                        <svg class="w-4 h-4 transition-all duration-300"
                             [class.rotate-90]="layoutService.isMenuExpanded(item.id)"
                             [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                             [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </button>

                      <!-- Submenu -->
                      <div *ngIf="layoutService.isMenuExpanded(item.id) && (!layoutService.sidebarCollapsed() || isHovered || isSmallScreen)" 
                           class="submenu-container">
                        <ul class="submenu">
                          <li *ngFor="let child of item.children">
                            <a 
                              [routerLink]="child.route"
                              class="submenu-item"
                              [class.active]="isMenuItemActive(child)"
                              (click)="onMenuItemClick()">
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
                <div [ngClass]="{'flex justify-center': layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen}">
                  <ng-container *ngIf="!item.children || item.children.length === 0; else hasSecondaryChildren">
                    <a 
                      [routerLink]="item.route"
                      class="sidebar-item transition-all duration-300"
                      [class.active]="isMenuItemActive(item)"
                      [class.justify-center]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [class.w-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [class.h-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [title]="(layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen) ? item.title : ''"
                      (click)="onMenuItemClick()">
                      
                      <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                      
                      <span class="flex-1 transition-all duration-300 overflow-hidden whitespace-nowrap"
                            [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                            [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                        {{ item.title }}
                      </span>
                      
                      <span *ngIf="item.badge" 
                            class="transition-all duration-300 overflow-hidden whitespace-nowrap"
                            [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'"
                            [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                            [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                        {{ item.badge }}
                      </span>
                    </a>
                  </ng-container>

                  <ng-template #hasSecondaryChildren>
                    <div class="w-full">
                      <button 
                        (click)="toggleSubmenu(item.id)"
                        class="sidebar-item group w-full transition-all duration-300"
                        [class.active]="isParentMenuActive(item) || layoutService.isMenuExpanded(item.id)"
                        [class.justify-center]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [class.w-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [class.h-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [title]="(layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen) ? item.title : ''">
                        
                        <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                        
                        <span class="flex-1 text-left transition-all duration-300 overflow-hidden whitespace-nowrap"
                              [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                              [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                          {{ item.title }}
                        </span>
                        
                        <span *ngIf="item.badge" 
                              class="transition-all duration-300 overflow-hidden whitespace-nowrap"
                              [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'"
                              [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                              [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                          {{ item.badge }}
                        </span>
                        
                        <svg class="w-4 h-4 transition-all duration-300"
                             [class.rotate-90]="layoutService.isMenuExpanded(item.id)"
                             [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                             [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </button>

                      <!-- Submenu -->
                      <div *ngIf="layoutService.isMenuExpanded(item.id) && (!layoutService.sidebarCollapsed() || isHovered || isSmallScreen)" 
                           class="submenu-container">
                        <ul class="submenu">
                          <li *ngFor="let child of item.children">
                            <a 
                              [routerLink]="child.route"
                              class="submenu-item"
                              [class.active]="isMenuItemActive(child)"
                              (click)="onMenuItemClick()">
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
            <div class="mb-4 transition-all duration-300 overflow-hidden"
                 [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                 [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                 [class.h-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                 [class.h-auto]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen">
              <span class="text-xs font-semibold text-dark-400 uppercase tracking-wider">SUPPORT</span>
            </div>
            
            <ul class="space-y-2">
              <li *ngFor="let item of supportNavItems">
                <div [ngClass]="{'flex justify-center': layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen}">
                  <ng-container *ngIf="!item.children || item.children.length === 0; else hasSupportChildren">
                    <a 
                      [routerLink]="item.route"
                      class="sidebar-item transition-all duration-300"
                      [class.active]="isMenuItemActive(item)"
                      [class.justify-center]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [class.w-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [class.h-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                      [title]="(layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen) ? item.title : ''"
                      (click)="onMenuItemClick()">
                      
                      <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                      
                      <span class="flex-1 transition-all duration-300 overflow-hidden whitespace-nowrap"
                            [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                            [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                        {{ item.title }}
                      </span>
                      
                      <span *ngIf="item.badge" 
                            class="transition-all duration-300 overflow-hidden whitespace-nowrap"
                            [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'"
                            [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                            [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                            [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                        {{ item.badge }}
                      </span>
                    </a>
                  </ng-container>

                  <ng-template #hasSupportChildren>
                    <div class="w-full">
                      <button 
                        (click)="toggleSubmenu(item.id)"
                        class="sidebar-item group w-full transition-all duration-300"
                        [class.active]="isParentMenuActive(item) || layoutService.isMenuExpanded(item.id)"
                        [class.justify-center]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [class.w-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [class.h-12]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                        [title]="(layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen) ? item.title : ''">
                        
                        <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(item.icon)" class="flex-shrink-0 w-5 h-5"></span>
                        
                        <span class="flex-1 text-left transition-all duration-300 overflow-hidden whitespace-nowrap"
                              [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                              [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.ml-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                          {{ item.title }}
                        </span>
                        
                        <span *ngIf="item.badge" 
                              class="transition-all duration-300 overflow-hidden whitespace-nowrap"
                              [class]="item.badge === 'PRO' ? 'pro-badge' : 'new-badge'"
                              [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                              [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                              [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen">
                          {{ item.badge }}
                        </span>
                        
                        <svg class="w-4 h-4 transition-all duration-300"
                             [class.rotate-90]="layoutService.isMenuExpanded(item.id)"
                             [class.opacity-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             [class.opacity-100]="!layoutService.sidebarCollapsed() || isHovered || isSmallScreen"
                             [class.w-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             [class.scale-0]="layoutService.sidebarCollapsed() && !isHovered && !isSmallScreen"
                             fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </button>

                      <!-- Submenu -->
                      <div *ngIf="layoutService.isMenuExpanded(item.id) && (!layoutService.sidebarCollapsed() || isHovered || isSmallScreen)" 
                           class="submenu-container">
                        <ul class="submenu">
                          <li *ngFor="let child of item.children">
                            <a 
                              [routerLink]="child.route"
                              class="submenu-item"
                              [class.active]="isMenuItemActive(child)"
                              (click)="onMenuItemClick()">
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
        
        <!-- Main Content - Takes remaining space -->
        <main class="flex-1 overflow-y-auto bg-dark-900 min-w-0">
          <div class="min-h-full">
            <router-outlet></router-outlet>
          </div>
        </main>
        
      </div>
    </div>
  `,
  styles: [`
    /* Sidebar styles */
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

    /* Submenu styles */
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

    /* Animations */
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

    /* Badge styles */
    .pro-badge {
      @apply bg-primary-600 text-white text-xs px-2 py-1 rounded-md font-medium;
    }

    .new-badge {
      @apply bg-green-600 text-white text-xs px-2 py-1 rounded-md font-medium;
    }

    /* Mobile specific styles */
    @media (max-width: 1023px) {
      /* Ensure sidebar slides smoothly on mobile */
      aside {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Prevent body scroll when sidebar is open */
      body.sidebar-open {
        overflow: hidden;
      }
    }

    /* Desktop hover effects */
    @media (min-width: 1024px) {
      aside:hover {
        @apply shadow-2xl shadow-primary-500/10;
      }
    }

    /* Focus states */
    .focus-ring {
      @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-800;
    }

    .pro-badge {
      @apply bg-primary-600 text-white text-xs px-2 py-1 rounded-md font-medium;
    }

    .new-badge {
      @apply bg-green-600 text-white text-xs px-2 py-1 rounded-md font-medium;
    }

  `]
})
export class MainLayoutComponent implements OnInit {
  layoutService = inject(LayoutService);
  sanitizer = inject(DomSanitizer);

  primaryNavItems: NavigationItem[] = navigationItems;
  secondaryNavItems: NavigationItem[] = secondaryNavigationItems;
  supportNavItems: NavigationItem[] = supportNavigationItems;

  isHovered = false;
  isSmallScreen = false;

  ngOnInit() {
    this.checkScreenSize();
    this.layoutService.refreshMenuState();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 1024;

    // Auto-close sidebar on desktop
    if (!this.isSmallScreen) {
      this.layoutService.closeSidebar();
    }
  }

  onMouseEnter() {
    // Only enable hover expansion on desktop when sidebar is collapsed
    if (!this.isSmallScreen && this.layoutService.sidebarCollapsed()) {
      this.isHovered = true;
    }
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  onMenuItemClick() {
    // Close sidebar on mobile when menu item is clicked
    if (this.isSmallScreen) {
      this.layoutService.closeSidebar();
    }
  }

  toggleSubmenu(menuId: string) {
    // Don't toggle if sidebar is collapsed and not hovered on desktop
    if (!this.isSmallScreen && this.layoutService.sidebarCollapsed() && !this.isHovered) {
      return;
    }
    this.layoutService.toggleMenu(menuId);
  }

  isMenuItemActive(item: NavigationItem): boolean {
    return this.layoutService.isMenuItemActive(item.route);
  }

  isParentMenuActive(item: NavigationItem): boolean {
    return this.layoutService.isParentMenuActive(item.children);
  }
}