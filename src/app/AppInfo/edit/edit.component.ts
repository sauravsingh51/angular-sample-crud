import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../services/app-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInfoModel } from '../models/AppInfoModel';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  appInfoModel!: AppInfoModel;
  form!: FormGroup;
    
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
      
    this.form = new FormGroup({
      appName: new FormControl('', [Validators.required]),
      sonarKey: new FormControl('', Validators.required),
      codeQuality: new FormControl('', Validators.required),
      codeCoverage: new FormControl('', Validators.required)
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.appInfoService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('App updated successfully!');
         this.router.navigateByUrl('app/index');
    })
  }
   
}