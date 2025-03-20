import { Component, input } from '@angular/core';

@Component({
  selector: 'byu-header',
  imports: [],
  templateUrl: './byu-header.component.html',
  styleUrl: './byu-header.component.scss'
})
export class ByuHeaderComponent {
  title = input<string>('');
}

//notes
// @input Decorators are about declaring properties and behaviors.
// input Signals are about creating reactive data flows that automatically propagate changes.