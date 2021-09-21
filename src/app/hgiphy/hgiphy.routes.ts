import { Routes } from '@angular/router';
import {HomePageRoutes} from "./views/home-page/home-page.routes";
import {HGiphyComponent} from "./hgiphy.component";
import { GiphItemRoutes} from "./views/home-page/giph-item/giph-item.routes"
export const HGiphyRoutes:Routes = [
    {
        path: 'HGiphy',
        component: HGiphyComponent,
        canActivateChild: [],
        children: [
            ...HomePageRoutes,
            ...GiphItemRoutes
        ]
    }
];
