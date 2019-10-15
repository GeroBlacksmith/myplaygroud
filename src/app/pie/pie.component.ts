import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CustomValidator } from '../validators/custom-validator';
@Component({
  selector: 'app-pie',
  templateUrl:'./pie.component.html',
  styleUrls:['./pie.component.css']
})
export class PieComponent  {

  name = 'Angular';
  finalForm: FormGroup;

  constructor(private fb : FormBuilder){
    this.finalForm = this.createForm();
  }

  createForm():FormGroup{
      return this.fb.group(
      {
        'area': ['', Validators.compose([
          Validators.required, 
          CustomValidator.custom, 
          CustomValidator.customA
        ])],
        'number': ['', Validators.compose([
          Validators.required,
          CustomValidator.custom, 
          CustomValidator.customA
        ])],
        'exarea': ['', Validators.compose([
          Validators.required
        ])],
        'exnumber':['', Validators.compose([
          Validators.required
        ])]
      },
      {
        validator:[CustomValidator.formCustomValidator('number','exnumber')]
      });
  }
}
