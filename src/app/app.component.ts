import { Component } from '@angular/core';
import { ByuHeaderComponent, HeaderConfig } from './byu-header/byu-header.component';
import { ByuFooterComponent } from './byu-footer/byu-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ByuHeaderComponent, ByuFooterComponent],
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
}
