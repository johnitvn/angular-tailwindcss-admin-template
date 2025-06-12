import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4 lg:p-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-white mb-2">Dashboard</h1>
          <app-breadcrumb [items]="breadcrumbItems"></app-breadcrumb>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 card-hover">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-dark-400 text-sm font-medium">Total Users</p>
              <p class="text-2xl font-bold text-white mt-1">24,532</p>
              <p class="text-green-400 text-sm mt-2">+12% from last month</p>
            </div>
            <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 card-hover">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-dark-400 text-sm font-medium">Revenue</p>
              <p class="text-2xl font-bold text-white mt-1">$45,678</p>
              <p class="text-green-400 text-sm mt-2">+8% from last month</p>
            </div>
            <div class="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 card-hover">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-dark-400 text-sm font-medium">Orders</p>
              <p class="text-2xl font-bold text-white mt-1">1,432</p>
              <p class="text-red-400 text-sm mt-2">-3% from last month</p>
            </div>
            <div class="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 card-hover">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-dark-400 text-sm font-medium">Growth</p>
              <p class="text-2xl font-bold text-white mt-1">23.5%</p>
              <p class="text-green-400 text-sm mt-2">+5% from last month</p>
            </div>
            <div class="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Chart placeholder -->
        <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Analytics Overview</h3>
          <div class="h-64 bg-dark-700/30 rounded-lg flex items-center justify-center">
            <p class="text-dark-400">Chart will be displayed here</p>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3 p-3 bg-dark-700/30 rounded-lg">
              <div class="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">U</span>
              </div>
              <div class="flex-1">
                <p class="text-white text-sm font-medium">New user registered</p>
                <p class="text-dark-400 text-xs">2 minutes ago</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-dark-700/30 rounded-lg">
              <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">$</span>
              </div>
              <div class="flex-1">
                <p class="text-white text-sm font-medium">Payment received</p>
                <p class="text-dark-400 text-xs">5 minutes ago</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-dark-700/30 rounded-lg">
              <div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">!</span>
              </div>
              <div class="flex-1">
                <p class="text-white text-sm font-medium">System alert</p>
                <p class="text-dark-400 text-xs">10 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Dashboard', active: true }
  ];
}