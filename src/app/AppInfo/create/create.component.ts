import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../services/app-info.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public appInfoService: AppInfoService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
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
    this.appInfoService.create(this.form.value).subscribe((res:any) => {
         console.log('App created successfully!');
         this.router.navigateByUrl('app/index');
    })
  }
  
}