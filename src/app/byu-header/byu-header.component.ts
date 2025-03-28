import { Component, input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

type HeaderLink = {
  text: string;
  path: string;
};

//A HeaderMenu can be either a simple link with path,
//OR a menu group with nested items
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
  imports: [RouterModule],
  templateUrl: './byu-header.component.html',
  styleUrl: './byu-header.component.scss'
})
export class ByuHeaderComponent {
  config = input<HeaderConfig>();

  isHeaderLink(item: HeaderMenu): item is HeaderLink {
    return 'path' in item;
  }
  
}



//notes
// @input Decorators are about declaring properties and behaviors.
// input Signals are about creating reactive data flows that automatically propagate changes.