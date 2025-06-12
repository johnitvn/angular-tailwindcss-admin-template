import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="w-full h-[4.5rem] bg-dark-800 border-b border-dark-700 z-40">
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
  `
})
export class HeaderComponent {
  layoutService = inject(LayoutService);
}