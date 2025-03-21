import { Component, input } from '@angular/core';

type HeaderLink = {
  text: string;
  path: string;
};

type HeaderMenu = HeaderLink | {
  text: string;
  items: HeaderLink[];
}

export type HeaderConfig = {
  title: HeaderLink;
  subtitle?: HeaderLink;
  breadcrumbs?: HeaderLink[];
  menu?: HeaderMenu[];
}

@Component({
  selector: 'byu-header',
  imports: [],
  templateUrl: './byu-header.component.html',
  styleUrl: './byu-header.component.scss'
})
export class ByuHeaderComponent {
  config = input<HeaderConfig>();
}

//notes
// @input Decorators are about declaring properties and behaviors.
// input Signals are about creating reactive data flows that automatically propagate changes.