import { Component } from '@angular/core';
import { ByuHeaderComponent, HeaderConfig } from './byu-header/byu-header.component';
import { ByuFooterComponent } from './byu-footer/byu-footer.component';
import { LinkerSidebarComponent, SidebarConfig } from "./linker-sidebar/linker-sidebar.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ByuHeaderComponent, ByuFooterComponent, LinkerSidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerConfig: HeaderConfig = {
    title: {
      text: 'My custom title',
      path: '/'
    },
    subtitle: {
      text: 'My custom subtitle',
      path: '/'
    },
    breadcrumbs: [
      {
        text: 'College of Engineering',
        path: '/'
      },
      {
        text: 'school of rock',
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
