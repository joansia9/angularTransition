import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

type HeaderLink = {
  label: string;
  path: string;
};

//A HeaderMenu can be either a simple link with path,
//OR a menu group with nested items
type HeaderMenuItem = {
  label: string;
  path?: string;
  items?: HeaderLink[]
}

export type HeaderConfig = {
  title: HeaderLink;
  subtitle?: HeaderLink;
  breadcrumbs?: HeaderLink[];
  menu?: HeaderMenuItem[];
}


@Component({
  selector: 'byu-header',
  imports: [RouterModule], // here this fixed the drop down menu lol
  templateUrl: './byu-header.component.html',
  styleUrl: './byu-header.component.scss'
})

export class ByuHeaderComponent {
  config = input<HeaderConfig>();
  openMenu = signal<string | null>(null);

  isHeaderLink(item: HeaderMenuItem): item is HeaderLink {
    return 'path' in item;
  }

  setMenu(label:string | null) {
    this.openMenu.set(label);
  }
}



//notes
// @input Decorators are about declaring properties and behaviors.
// input Signals are about creating reactive data flows that automatically propagate changes.