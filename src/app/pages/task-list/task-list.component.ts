import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4 lg:p-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-white mb-2">Task List</h1>
          <app-breadcrumb [items]="breadcrumbItems"></app-breadcrumb>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="w-full max-w-2xl">
          <!-- Main Card -->
          <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 text-center shadow-2xl card-hover">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-white mb-3">Task List View</h2>
              <p class="text-dark-300 text-lg leading-relaxed max-w-md mx-auto">
                This is the Task List page. Here you can manage your tasks in a list format with 
                sorting, filtering, and organization features.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 focus-ring">
                Create New Task
              </button>
              <button class="px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all duration-200 border border-dark-600 hover:border-dark-500 focus-ring">
                View All Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TaskListComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Task', url: '/task' },
    { label: 'List', active: true }
  ];
}