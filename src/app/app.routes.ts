import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: "one", component: Page1Component, title: "Page One" },
            { path: "two", component: Page2Component }
        ]
    },
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: "three", component: Page3Component },
            { path: "four", component: Page4Component }
        ]
    },
    { path: "**", component: Page1Component }
];
