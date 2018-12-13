import { Component } from '@angular/core';
import {NavItem} from './nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template';
  navItems: NavItem[] = [
    {
      displayName: 'Pagina 1 & 2',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Página 1',
          iconName: 'group',
          route: 'first-page'
        },
        {
          displayName: 'Página 2',
          iconName: 'group',
          route: 'second-page'
        },
        ]
    },
    {
      displayName: 'Pagina 3',
      iconName: 'recent_actors',
      route: 'third-page'
    },
  ];
}
