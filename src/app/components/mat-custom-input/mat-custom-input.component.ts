import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
export const customErrorMessages: any = {
  required: 'This is required field',
  max: "Maximum length exceeded",
  min: 'Too Short',
  nomatch: 'Invalid input',
  pattern: "Invalid input",
}
@Component({
  selector: 'app-mat-custom-input',
  templateUrl: './mat-custom-input.component.html',
  styleUrls: ['./mat-custom-input.component.scss']
})

export class MatCustomInputComponent implements OnInit {
  customErrorMessages = customErrorMessages
  @Input() label = "";
  @Input() mandatory = false;
  @Input() type = "text";
  @Input() placeHolder = "";
  @Input() autocomplete = 'off';
  @Input() formControlname: any = new FormControl();
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() errors: any = {};
  @Input() readonly: boolean = false;
  constructor() {
    // this.keyofErrors = Object.keys(this.errors)
  }

  ngOnInit(): void {
  }

  get keyofErrors() {
    if (this.errors) {
      return Object.keys(this.errors)
    } else {
      return []
    }
  }

}

