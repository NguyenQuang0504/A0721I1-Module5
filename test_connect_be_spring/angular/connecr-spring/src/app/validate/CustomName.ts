import {AbstractControl} from "@angular/forms";
// Phuong thuc validate khi du lieu control.value tra ve nho hon 10 ky tu thi checkName tra ve true va o html se hien thi ra loi.
export function CustomName(control:AbstractControl) {
  if (control.value.length < 3){
    return {checkName: true}
  }
  return null;
}
