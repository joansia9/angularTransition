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
import { ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

type SidebarLink = {
  type: 'link';
  text: string;
  icon?: string;
  path: string;
};

type SidebarSearch = {
  type: 'search';
  label: string;
  placeholder?: string;
  icon: string;
};

export type SidebarMenuItem = SidebarLink | SidebarSearch;

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
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('personIdSearchInput') personIdSearchInput!: ElementRef<HTMLInputElement>;
  config = input<SidebarConfig>();

  focusSearch() {
    this.sidenav.open(); 
    setTimeout(() => {
      this.personIdSearchInput?.nativeElement?.focus();
    }, 0);
  }

}

