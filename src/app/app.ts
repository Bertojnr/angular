import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Rolescomponent } from './rolescomponent/rolescomponent';
import { Mastercomponent } from './mastercomponent/mastercomponent';
import { Addrolescomponent } from './addrolescomponent/addrolescomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-app');
}
