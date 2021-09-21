import { Routes } from '@angular/router';
import {GiphItemComponent} from "./giph-item.component";

export const GiphItemRoutes:Routes = [
    {
        path: ':id/details',
        component: GiphItemComponent,
    }
];
