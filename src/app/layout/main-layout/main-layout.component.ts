import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <!-- Flexbox Container - Full Height -->
    <div class="flex flex-col min-h-screen bg-dark-900">
      
      <!-- Header - Fixed Width, Flexible Height -->
      <app-header class="flex-shrink-0"></app-header>
      
      <!-- Content Area - Flex Container -->
      <div class="flex flex-1 overflow-hidden">
        
        <!-- Sidebar - Fixed Width -->
        <app-sidebar 
          class="flex-shrink-0 transition-all duration-300 ease-in-out"
          [class.w-64]="!layoutService.sidebarCollapsed()"
          [class.w-16]="layoutService.sidebarCollapsed()"
          [class.-ml-64]="layoutService.sidebarOpen() === false && window.innerWidth < 1024"
          [class.ml-0]="layoutService.sidebarOpen() || window.innerWidth >= 1024">
        </app-sidebar>
        
        <!-- Main Content - Flexible Width -->
        <main class="flex-1 overflow-y-auto bg-dark-900">
          <div class="min-h-full">
            <router-outlet></router-outlet>
          </div>
        </main>
        
      </div>
      
      <!-- Mobile Overlay -->
      <div 
        *ngIf="layoutService.sidebarOpen() && window.innerWidth < 1024" 
        class="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
        (click)="layoutService.closeSidebar()">
      </div>
    </div>
  `
})
export class MainLayoutComponent implements OnInit {
  layoutService = inject(LayoutService);
  window = window;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    const isLargeScreen = window.innerWidth >= 1024;
    if (isLargeScreen) {
      this.layoutService.closeSidebar();
    }
  }
}