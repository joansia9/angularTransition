import { Component } from '@angular/core';
import { ByuHeaderComponent, HeaderConfig } from '../byu-header/byu-header.component';
import { LinkerSidebarComponent, SidebarConfig } from '../linker-sidebar/linker-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [ByuHeaderComponent, LinkerSidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  headerConfig: HeaderConfig = {
    title: {
      label: 'Nauvoo',
      path: '/'
    },
    subtitle: {
      label: 'Linker',
      path: '/'
    },
    breadcrumbs: [
      {
        label: 'College of Engineering',
        path: '/'
      },
      {
        label: 'School of rock',
        path: '/'
      }
    ],
    menu: [
      {
        label: 'item 1',
        path: '/'
      },
      {
        label: 'item 2',
        path: '/'
      },
      {
        label: 'item 3',
        path: '/'
      },
      {
        label: 'item 4',
        items: [
          { label: 'Subitem A', path: '/subitem-a' },
          { label: 'Subitem B', path: '/subitem-b' },
          { label: 'Subitem C', path: '/subitem-c' }
        ]
      },
      {
        label: 'Dropdown Menu TEST',
        items: [
          { label: 'Subitem A', path: '/subitem-a' },
          { label: 'Subitem B', path: '/subitem-b' },
          { label: 'Subitem C', path: '/subitem-c' }
        ]
      }
    
    ]
  }

  sidebarConfig: SidebarConfig = {
    menu: [
      { type: 'search', label: 'Person ID', placeholder: 'Person ID', icon: 'search'},
      { type: 'link', text: 'Person', icon: 'person', path: '/' },
      { type: 'link', text: 'Source', icon: 'source', path: '/' },
      { type: 'link', text: 'Repository', icon: 'folder', path: '/' },
      { type: 'link', text: 'Export', icon: 'file_download', path: '/' },
      { type: 'link', text: 'Data Management', icon: 'manage_accounts', path: '/' }
    ]
  };

 
  

}
