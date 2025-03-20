import { Component } from '@angular/core';
import { ByuHeaderComponent } from './byu-header/byu-header.component';
import { ByuFooterComponent } from './byu-footer/byu-footer.component';

type HeaderLink = {
  path: string,
  label: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ByuHeaderComponent, ByuFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
