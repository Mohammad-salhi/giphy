import { Component, OnInit } from '@angular/core';
import { HomePageBackendService}  from "./home-page-backend.service"
import { HomePageViewService } from "./home-page.service"
import {HGiphyService} from "../../hgiphy.service"
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public giphys: any = []
  searchInputSub: Subscription
  constructor(private homePageBackendService: HomePageBackendService,
              private homePageViewService: HomePageViewService,
              private hGiphyService: HGiphyService,
              private route: Router
  ) { }

  ngOnInit(): void {
    this.getGiphs()
    this.searchInputSub = this.hGiphyService.serachInputEmitter.subscribe(
      (searchInput) => {
          this.getGiphs(searchInput)
      }
    )
  }

  getGiphs(filter?: any) {
    this.giphys= []
    this.homePageBackendService.getDashboardItems(filter).subscribe(
      (giphs) => {
        this.homePageViewService.giphs = giphs
        this.formatGiphs(giphs.data)
      },
      (err) => {
        this.handleNetworkErr()
      }
    );

  }

  formatGiphs(giphs: any) {
    giphs.forEach((item:any) => {
      let date  =  new Date (item.import_datetime).toLocaleDateString()
      let giphItem = {
          userName : item.username,
          trendingDatetime : date,
          url : item.images.fixed_height.url,
          title: item.title,
          id :item.id
      }
      this.giphys.push(giphItem)
    });
  
  }

  getItemUrl(url:any){
    return url
  }

  handleNetworkErr() {
    
  }

  onGiphItemClicked(item:any) {
    let url ='HGiphy/'
    url = url.concat(item.id).concat("/details")
    this.route.navigate([url]);


    this.homePageViewService.selectedGiphId = item.id
    }
  

}
