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
    <div class="min-h-screen bg-dark-900 flex">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>
      
      <!-- Main Content -->
      <div class="flex-1 flex flex-col transition-all duration-300">
        
        <!-- Header -->
        <app-header></app-header>
        
        <!-- Page Content -->
        <main class="flex-1 overflow-auto">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class MainLayoutComponent implements OnInit {
  layoutService = inject(LayoutService);

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