import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

type SidebarLink = {
  type: 'link';
  text: string;
  icon: string;
  path: string;
  showSearch?: boolean;
};

export type SidebarMenuItem = SidebarLink;

export type SidebarConfig = {
  menu: SidebarMenuItem[];
};

@Component({
  selector: 'app-linker-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatInputModule,
    MatLabel,
    MatFormField,
    RouterModule,
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
  

  toggleMenuIcon() {
    this.opened = !this.opened;
  }

}

