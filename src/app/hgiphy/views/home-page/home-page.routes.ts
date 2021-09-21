import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page.component";
import { GiphItemRoutes} from "./giph-item/giph-item.routes"
export const HomePageRoutes: Routes = [
    {
        path: 'home-page',
        component: HomePageComponent,
    }
];
