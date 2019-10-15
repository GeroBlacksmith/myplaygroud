import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
export class CustomValidator{

  static custom(control:AbstractControl):{[s:string]:boolean}|null{
    if(control.value.match(/asd|qwe/))
    return { 'errorCustom':true};
    return;
  }
  static customA(control:AbstractControl):{[s:string]:boolean}{
    if(control.value.match(/rty|fgh/))
    return { 'errorCustomA':true};
    return;
  }
  static formCustomValidator(number,exnumber):ValidatorFn{
    return (group:FormGroup):ValidationErrors => {
      console.log(group);
      return {'formCustomError':true};
      return;
    }

  }
}