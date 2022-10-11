import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../services/app-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInfoModel } from '../models/AppInfoModel';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  appInfoModel!: AppInfoModel;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public appInfoService: AppInfoService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['appId'];
        
    this.appInfoService.find(this.id).subscribe((data: AppInfoModel)=>{
      this.appInfoModel = data;
    });
  }
    
}