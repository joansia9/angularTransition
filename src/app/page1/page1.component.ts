import { Component } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page1',
  imports: [LayoutComponent, RouterLink],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

}
