import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../services/app-info.service';
import { AppInfoModel } from '../models/AppInfoModel';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  appInfoModels: AppInfoModel[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public appInfoService: AppInfoService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.appInfoService.getAll().subscribe((data: AppInfoModel[])=>{
      this.appInfoModels = data;
      console.log(this.appInfoModels);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.appInfoService.delete(id).subscribe(res => {
         this.appInfoModels = this.appInfoModels.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
    
}