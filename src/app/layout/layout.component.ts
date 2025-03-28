import { Component } from '@angular/core';
import { ByuHeaderComponent, HeaderConfig } from '../byu-header/byu-header.component';
import { LinkerSidebarComponent, SidebarConfig } from '../linker-sidebar/linker-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ByuHeaderComponent, LinkerSidebarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  headerConfig: HeaderConfig = {
    title: {
      text: 'Nauvoo',
      path: '/'
    },
    subtitle: {
      text: 'Linker',
      path: '/'
    },
    breadcrumbs: [
      {
        text: 'College of Engineering',
        path: '/'
      },
      {
        text: 'School of rock',
        path: '/'
      }
    ],
    menu: [
      {
        text: 'item 1',
        path: '/'
      },
      {
        text: 'item 2',
        path: '/'
      },
      {
        text: 'item 3',
        path: '/'
      },
      {
        text: 'item 4',
        path: '/'
      },
      {
        text: 'Dropdown Menu TEST',
        items: [
          { text: 'Subitem A', path: '/subitem-a' },
          { text: 'Subitem B', path: '/subitem-b' },
          { text: 'Subitem C', path: '/subitem-c' }
        ]
      }
    
    ]
  }

  sidebarConfig: SidebarConfig = {
    menu: [
      { type: 'search', label: 'Search Person ID', placeholder: 'Search Person ID', icon: 'search'},
      { type: 'link', text: 'Person', icon: 'person', path: '/' },
      { type: 'link', text: 'Source', icon: 'source', path: '/' },
      { type: 'link', text: 'Repository', icon: 'folder', path: '/' },
      { type: 'link', text: 'Export', icon: 'file_download', path: '/' },
      { type: 'link', text: 'Data Management', icon: 'manage_accounts', path: '/' }
    ]
  };

  openDropdownText: string | null = null;
  toggleDropdown(text: string) {
    this.openDropdownText = this.openDropdownText === text ? null : text;
  }
  isOpen(text: string): boolean {
    return this.openDropdownText === text;

  }

  
}
