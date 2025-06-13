import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4 lg:p-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-white mb-2">Blank Page</h1>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="w-full max-w-2xl">
          <!-- Main Card -->
          <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 text-center shadow-2xl card-hover">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-white mb-3">Card Title Here</h2>
              <p class="text-dark-300 text-lg leading-relaxed max-w-md mx-auto">
                Start putting content on grids or panels, you can also use different combinations of 
                grids. Please check out the dashboard and other pages
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 focus-ring">
                Get Started
              </button>
              <button class="px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all duration-200 border border-dark-600 hover:border-dark-500 focus-ring">
                Learn More
              </button>
            </div>
          </div>

          <!-- Feature Cards -->
          <div class="grid md:grid-cols-3 gap-6 mt-8">
            <div class="bg-dark-800/30 backdrop-blur-sm border border-dark-700/30 rounded-xl p-6 text-center card-hover">
              <div class="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Dashboard</h3>
              <p class="text-dark-400 text-sm">Access your main dashboard with analytics and insights</p>
            </div>

            <div class="bg-dark-800/30 backdrop-blur-sm border border-dark-700/30 rounded-xl p-6 text-center card-hover">
              <div class="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p class="text-dark-400 text-sm">View detailed analytics and performance metrics</p>
            </div>

            <div class="bg-dark-800/30 backdrop-blur-sm border border-dark-700/30 rounded-xl p-6 text-center card-hover">
              <div class="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Profile</h3>
              <p class="text-dark-400 text-sm">Manage your user profile and account settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PageComponent {

}