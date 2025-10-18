import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { SideNav } from './shared/components/side-nav/side-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Layout, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('spikerz-assessment');
}
