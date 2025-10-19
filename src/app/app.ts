import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SideNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  protected readonly title = signal('spikerz-assessment');

  isCollapsed = false;
}
