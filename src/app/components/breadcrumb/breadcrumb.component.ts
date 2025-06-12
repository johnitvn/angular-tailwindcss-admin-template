import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  url?: string;
  active?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="flex items-center gap-2 text-sm">
      <ng-container *ngFor="let item of items; let last = last">
        <a 
          *ngIf="item.url && !last" 
          [routerLink]="item.url"
          class="text-dark-400 hover:text-primary-400 transition-colors">
          {{ item.label }}
        </a>
        <span 
          *ngIf="!item.url || last"
          [class.text-white]="last"
          [class.text-dark-400]="!last">
          {{ item.label }}
        </span>
        <svg 
          *ngIf="!last" 
          class="w-4 h-4 text-dark-500"
          fill="currentColor" 
          viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </ng-container>
    </nav>
  `
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}