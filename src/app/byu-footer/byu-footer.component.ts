import { Component } from '@angular/core';

@Component({
  selector: 'byu-footer',
  templateUrl: './byu-footer.component.html',
  styleUrl: './byu-footer.component.scss'
})
export class ByuFooterComponent {
  currentYear: number = new Date().getFullYear(); // Automatically updates the year
}
