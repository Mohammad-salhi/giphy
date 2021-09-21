import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HGiphyRoutes} from "./hgiphy/hgiphy.routes"

const routes:Routes = [
    ...HGiphyRoutes,
  {
        path: '**',
        redirectTo: 'HGiphy/home-page'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule,
    ]
})
export class AppRoutingModule {
}
