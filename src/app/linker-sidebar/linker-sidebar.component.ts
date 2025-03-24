import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

type SidebarLink = {
  type: 'link';
  text: string;
  path: string;
};

type SidebarGroup = {
  type: 'group';
  text: string;
  items: SidebarLink[];
};

export type SidebarMenuItem = SidebarLink | SidebarGroup;

export type SidebarConfig = {
  menu: SidebarMenuItem[];
};

@Component({
  selector: 'app-linker-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule
  ],
  templateUrl: './linker-sidebar.component.html',
  styleUrl: './linker-sidebar.component.scss'
})

export class LinkerSidebarComponent {
  opened: boolean = false;
  config = input<SidebarConfig>();
  expanded = new Set<string>();  // track which groups are expanded

  toggleMenuIcon() {
    this.opened = !this.opened;
  }

}

