import { Component } from '@angular/core';
import { ByuHeaderComponent, HeaderConfig } from './byu-header/byu-header.component';
import { ByuFooterComponent } from './byu-footer/byu-footer.component';
import { LinkerSidebarComponent, SidebarConfig } from "./linker-sidebar/linker-sidebar.component";
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ByuHeaderComponent, ByuFooterComponent, LinkerSidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // headerConfig: HeaderConfig = {
  //   title: {
  //     text: "Nauvoo Linker",
  //     path: "/"
  //   }
  // }
  headerConfig: HeaderConfig = {
    title: {
      text: 'Components Demo Site',
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
  
}
