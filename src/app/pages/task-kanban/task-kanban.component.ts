import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-task-kanban',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4 lg:p-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-white mb-2">Task Kanban</h1>
          <app-breadcrumb [items]="breadcrumbItems"></app-breadcrumb>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="w-full max-w-2xl">
          <!-- Main Card -->
          <div class="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 text-center shadow-2xl card-hover">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-white mb-3">Task Kanban Board</h2>
              <p class="text-dark-300 text-lg leading-relaxed max-w-md mx-auto">
                This is the Task Kanban page. Here you can manage your tasks using a visual 
                Kanban board with drag-and-drop functionality and workflow stages.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 focus-ring">
                Create New Board
              </button>
              <button class="px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all duration-200 border border-dark-600 hover:border-dark-500 focus-ring">
                View All Boards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TaskKanbanComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Task', url: '/task' },
    { label: 'Kanban', active: true }
  ];
}