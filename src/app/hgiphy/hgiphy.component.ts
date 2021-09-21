import { Component, OnInit } from '@angular/core';
import { HGiphyService } from "./hgiphy.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-hgiphy',
  templateUrl: './hgiphy.component.html',
  styleUrls: ['./hgiphy.component.scss']
})
export class HGiphyComponent implements OnInit {
  public searchInput:any
  constructor(private hGiphyService: HGiphyService,
              private route: Router) {}

  ngOnInit(): void {
  }

  onSearchInputChanged(){
    if (this.searchInput.length >= 3) {
      setTimeout(
        () => {
          this.hGiphyService.serachInputEmitter.emit(this.searchInput);
        }, 300
      )
    }
    else {
      console.log("length of search input is less than 3 chars");
    }
  }

  onGoToHomePage() {
    this.route.navigate(['/HGiphy/home-page']);
  }

}
