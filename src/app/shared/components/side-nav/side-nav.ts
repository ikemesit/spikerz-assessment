import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item.interface';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  imports: [MatIcon, MatTooltip, NgClass, NgOptimizedImage],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  isCollapsed = false;

  navItems: NavItem[] = [
    { icon: 'dashboard', label: 'Lorem', route: '/' },
    { icon: 'person', label: 'Lorem', route: '/' },
    { icon: 'description', label: 'Lorem', route: '/' },
    { icon: 'zoom_in_map', label: 'Lorem', route: '/' },
    { icon: 'mail', label: 'Lorem', route: '/' },
    { icon: 'settings', label: 'Settings', route: '/' },
  ];

  navFooterItems: NavItem[] = [
    {
      icon: 'settings',
      label: 'Lorem',
      route: '/',
    },
    {
      icon: 'picture_in_picture',
      label: 'Lorem',
      route: '/',
    },
  ];

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
