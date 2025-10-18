import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  isCollapsed = false;

  navItems: NavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'person', label: 'Profile', route: '/profile' },
    { icon: 'description', label: 'Documents', route: '/documents' },
    { icon: 'bar_chart', label: 'Analytics', route: '/analytics' },
    { icon: 'mail', label: 'Messages', route: '/messages' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
  ];

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
