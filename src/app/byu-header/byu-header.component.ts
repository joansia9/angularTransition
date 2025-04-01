import { Component, input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

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
  imports: [RouterModule, NgIf], // 👈 add these here this fixed the drop down menu lol
  templateUrl: './byu-header.component.html',
  styleUrl: './byu-header.component.scss'
})
export class ByuHeaderComponent {
  config = input<HeaderConfig>();

  isHeaderLink(item: HeaderMenu): item is HeaderLink {
    return 'path' in item;
  }

  // Track which dropdown is open (null means none are open)
  openDropdownText: string | null = null;
  
  // Toggle function — if clicking the same dropdown, close it; otherwise open it
  toggleDropdown(text: string) {
    this.openDropdownText = this.openDropdownText === text ? null : text;
  }
  
  // Check if a given dropdown is currently open
  isOpen(text: string): boolean {
    return this.openDropdownText === text;
  }
  
}



//notes
// @input Decorators are about declaring properties and behaviors.
// input Signals are about creating reactive data flows that automatically propagate changes.