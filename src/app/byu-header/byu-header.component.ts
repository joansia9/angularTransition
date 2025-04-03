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
  imports: [RouterModule], // 👈 add these here this fixed the drop down menu lol
  templateUrl: './byu-header.component.html',
  styleUrl: './byu-header.component.scss'
})
export class ByuHeaderComponent {
  config = input<HeaderConfig>();
  dropdownStates = signal<Record<string, boolean>>({});

  isHeaderLink(item: HeaderMenuItem): item is HeaderLink {
    return 'path' in item;
  }

  toggleDropdown(label: string): void {
    const current = this.dropdownStates();
    const newStates: Record<string, boolean> = {};

    Object.keys(current).forEach(key => {
      newStates[key] = false;
    });
    newStates[label] = !current[label];

    this.dropdownStates.set(newStates);
  }

  // Check if a given dropdown is currently open
  // isOpen(text: string): boolean {
  //   return this.openDropdownText === text;
  // }

}



//notes
// @input Decorators are about declaring properties and behaviors.
// input Signals are about creating reactive data flows that automatically propagate changes.