import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item.interface';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  imports: [MatIcon, MatTooltip, NgClass],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
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
