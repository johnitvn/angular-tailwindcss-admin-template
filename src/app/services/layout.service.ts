import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _sidebarOpen = signal(false);
  private _sidebarCollapsed = signal(false);
  private _expandedMenus = signal<Set<string>>(new Set());

  sidebarOpen = this._sidebarOpen.asReadonly();
  sidebarCollapsed = this._sidebarCollapsed.asReadonly();
  expandedMenus = this._expandedMenus.asReadonly();

  toggleSidebar() {
    this._sidebarOpen.set(!this._sidebarOpen());
  }

  closeSidebar() {
    this._sidebarOpen.set(false);
  }

  toggleCollapse() {
    this._sidebarCollapsed.set(!this._sidebarCollapsed());
    // Close all expanded menus when collapsing sidebar
    if (this._sidebarCollapsed()) {
      this._expandedMenus.set(new Set());
    }
  }

  setSidebarState(open: boolean) {
    this._sidebarOpen.set(open);
  }

  setCollapsedState(collapsed: boolean) {
    this._sidebarCollapsed.set(collapsed);
  }

  toggleMenu(menuId: string) {
    const currentExpanded = new Set(this._expandedMenus());
    if (currentExpanded.has(menuId)) {
      currentExpanded.delete(menuId);
    } else {
      currentExpanded.add(menuId);
    }
    this._expandedMenus.set(currentExpanded);
  }

  isMenuExpanded(menuId: string): boolean {
    return this._expandedMenus().has(menuId);
  }

  closeAllMenus() {
    this._expandedMenus.set(new Set());
  }
}