import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { HGiphyService} from "../../../hgiphy.service"
import { GiphItemBackendService } from "./giph-item-backend.service"
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-giph-item',
  templateUrl: './giph-item.component.html',
  styleUrls: ['./giph-item.component.scss']
})
export class GiphItemComponent implements OnInit, OnDestroy {
  giphys: any
  giphItemId: any
  busy=false
  parentParams: Subscription
  selectedItem: any
  emailInput: string =""
  nameInput: string = ""
  commentInput: string = ""
  comments = []
  commentStr = "comments"
  constructor(private hGiphyService : HGiphyService,
              private giphItemBackendService: GiphItemBackendService,
              private activatedRoute : ActivatedRoute,


  ) { }

  ngOnInit(): void {
        
    this.parentParams = this.activatedRoute.params.subscribe((params) => {
      if (params["id"] && params["id"] != "_") {
        this.giphItemId= params['id'];
        this.busy =true ;
        this.giphItemBackendService.getItemDetails(this.giphItemId).subscribe(
          (itemDetails) => {
            this.selectedItem = {
              id: itemDetails.data.id, 
              userAvatar: itemDetails.data.user.avatar_url,
              userName :  itemDetails.data.user.display_name,
              desc: itemDetails.data.user.description,
              giphUrl: itemDetails.data.images.downsized_large.url,
              is_verified: itemDetails.data.user.is_verified
            }
          this.retrieveCommentItems()
          }

        );
      }
    });
  }

  ngOnDestroy() {
    localStorage.removeItem(this.commentStr)
}

  getItemUrl(itemUrl:any) {
    return itemUrl
  }

  retrieveCommentItems() {
    localStorage.getItem(this.commentStr)
    let commentsObj = JSON.parse(localStorage.getItem(this.commentStr) || '{}') ? JSON.parse(localStorage.getItem(this.commentStr) || '{}') : {}
    if (commentsObj.hasOwnProperty(this.selectedItem.id)) {
      this.comments = commentsObj[this.selectedItem.id]
      //there seems to be a problem with html code rendering data to the item comments
      // though there are retrieved correctly for each id, i.e the following log
      
      console.log(this.comments)
    }
  }

  onSubmitClicked() {
    let commentsObj = JSON.parse(localStorage.getItem(this.commentStr) || '{}' ) ? JSON.parse(localStorage.getItem(this.commentStr)  || '{}' ) : {}
    let commentObj = {
      name: this.nameInput,
      email: this.emailInput,
      comment : this.commentInput
    }

    if (commentsObj.hasOwnProperty(this.selectedItem.id)) {
       commentsObj[this.selectedItem.id].push(commentObj)
    }
    else {
      commentsObj[this.selectedItem.id] = []
      commentsObj[this.selectedItem.id].push(commentObj)
    }
    let commentString = JSON.stringify(commentsObj)
    localStorage.setItem(this.commentStr, commentString)
    this.retrieveCommentItems()

  }
  
}
