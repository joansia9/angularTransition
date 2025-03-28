import { Component } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
