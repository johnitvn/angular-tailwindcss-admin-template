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
    <div class="min-h-screen bg-dark-900">
      <!-- Fixed Header -->
      <app-header class="fixed top-0 left-0 right-0 z-40"></app-header>
      
      <!-- Fixed Sidebar -->
      <app-sidebar class="fixed top-[4.5rem] left-0 bottom-0 z-30"></app-sidebar>
      
      <!-- Main Content Area -->
      <main 
        class="fixed top-[4.5rem] bottom-0 right-0 overflow-y-auto bg-dark-900 transition-all duration-300"
        [class.left-64]="!layoutService.sidebarCollapsed()"
        [class.left-16]="layoutService.sidebarCollapsed()"
        [class.left-0]="layoutService.sidebarOpen() && window.innerWidth < 1024">
        <div class="min-h-full">
          <router-outlet></router-outlet>
        </div>
      </main>
      
      <!-- Mobile Overlay -->
      <div 
        *ngIf="layoutService.sidebarOpen() && window.innerWidth < 1024" 
        class="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
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