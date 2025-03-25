import { Component } from '@angular/core';
import { ByuHeaderComponent, HeaderConfig } from '../byu-header/byu-header.component';
import { ByuFooterComponent } from '../byu-footer/byu-footer.component';
import { LinkerSidebarComponent, SidebarConfig } from '../linker-sidebar/linker-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ByuHeaderComponent, LinkerSidebarComponent, RouterOutlet, ByuFooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  headerConfig: HeaderConfig = {
    title: {
      text: 'Nauvoo',
      path: '/'
    },
    subtitle: {
      text: 'Linker',
      path: '/'
    },
    breadcrumbs: [
      {
        text: 'College of Engineering',
        path: '/'
      },
      {
        text: 'School of rock',
        path: '/'
      }
    ],
    menu: [
      {
        text: 'item 1',
        path: '/'
      },
      {
        text: 'item 2',
        path: '/'
      }
    ]
  }

    sidebarConfig: SidebarConfig = {
      menu: [
        {
          type: 'link',
          text: 'Sources',
          path: '/'
        },
        {
          type: 'group',
          text: 'Dropdown example',
          items: [
            { type: 'link', text: 'Repos', path: '/' },
            { type: 'link', text: 'Data', path: '/' },
            { type: 'link', text: 'Other', path: '/' }
          ]
        }
      ]
    }
}
