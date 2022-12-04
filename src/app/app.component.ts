import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from "@angular/material/icon";
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from "@angular/platform-browser";
import { customErrorMessages } from './components/mat-custom-input/mat-custom-input.component';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'registration';
  form: FormGroup;
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  isValidNumber: boolean = false;
  isValidPincode: boolean = false;
  validatingNumber: boolean = false;
  isLoading: boolean = false;
  validatingPinCode: boolean = false;
  customErrorMessages = customErrorMessages
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer, private fb: FormBuilder, public api: ApiService, private snackBar: MatSnackBar, private cd: ChangeDetectorRef) {
    this.api.isLoading.subscribe((e) => {
      this.isLoading = e
    });
    this.form = this.fb.group({
      dob: new FormControl(undefined, Validators.required),
      firstName: new FormControl<string>("", Validators.required),
      lastName: new FormControl<string>("", Validators.required),
      gender: new FormControl<string>("", Validators.required),
      age: new FormControl<string>("", Validators.required),
      addressLine1: new FormControl<string>("", Validators.required),
      addressLine2: new FormControl<string>(""),
      pNo: new FormControl<string | number>("", [Validators.required, Validators.max(9999999999)]),
      pinCode: new FormControl<string | number>("", [Validators.required, Validators.minLength(100000), Validators.max(999999)]),
      district: new FormControl<string>({ value: "", disabled: false }, [Validators.required]),
      state: new FormControl<string>({ value: "", disabled: false }, [Validators.required]),
      avatar: new FormControl<any>({ value: '', disabled: false }),
    })
    this.matIconRegistry.addSvgIcon(
      "matProfile",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/icon-people-circle.svg")
    );
  }

  genders = ['Male', 'Female', 'Others']
  submitForm(value: any) {
    let date = Date.parse(new Date(value.dob).toString())
    value.dob = date
    console.log(value);

    // this.api.handleLoading(true)
    // this.api.postForm(value).then((res => {

    //   this.api.handleLoading(false)
    //   this.snackBar.open('Done', '', {
    //     duration: 3000,
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right'
    //   })
    //   this.isValidPincode = false
    //   this.isValidNumber = false
    //   this.form.reset()
    //   this.form.get("avatar")?.patchValue("")
    // })).catch((error) => {

    //   this.snackBar.open('Something went Wrong', '', {
    //     duration: 3000,
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right'
    //   })
    // })
  }
  handleDob(event: any) {
    const dob = new Date(event.value);
    const diff = new Date().getTime() - dob.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));// calculating Age
    this.form.get('age')?.patchValue(age)
  }
  handlePhoneValidation() {
    this.isValidNumber = false // for valid api response for phone number

    if (!this.form.get('pNo')?.errors) {
      this.validatingNumber = true //for loader
      this.api.validatePhone(this.form.value.pNo).subscribe({
        next: (res: any) => {
          if (res.valid) {
            this.validatingNumber = false
            setTimeout(() => {
              this.isValidNumber = true;
            }, 300);
          } else {
            this.validatingNumber = false
            this.form.get("pNo")?.setErrors({ 'nomatch': true }) //setting errors after api validation
          }
        },
        error: () => {
          this.snackBar.open('Something went wrong', '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          })
        }
      })
    }
  }
  validatePinCode() {
    this.isValidPincode = false // for valid api response for Pin code
    if (!this.form.get('pinCode')?.errors) {
      this.validatingPinCode = true //for loader
      this.api.validatePinCode(this.form.value.pinCode).subscribe({
        next: (res: any) => {
          if (res.length > 0 && res[0].Status !== "Error") {
            this.form.get('state')?.patchValue(res[0].PostOffice[0].State)  //setting value of state and dist from api
            this.form.get('district')?.patchValue(res[0].PostOffice[0].District)
            this.validatingPinCode = false
            setTimeout(() => {
              this.isValidPincode = true;
            }, 300);
          } else {
            this.validatingPinCode = false
            this.form.get("pinCode")?.setErrors({ 'nomatch': true })//setting errors after api validation
          }
        },
        error: () => {
          this.snackBar.open('Something went wrong', '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          })
        }
      })
    }
  }
  convertToBase64(event: any) {
    if (event === "") {
      return
    } else {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //converting img to base64 string
      const _this = this
      reader.onload = function () {
        _this.form?.get("avatar")?.patchValue(reader.result)

      };
      reader.onerror = function (error) {
        _this.snackBar.open('re-upload image', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        })
      };
    }
  }
  get errorsOfgender() {
    let Error = this.form.get('gender')?.errors
    if (Error) {
      return Object.keys(Error)
    } else {
      return []
    }
  }
  get errorsOfdob() {
    let Error = this.form.get('dob')?.errors
    if (Error) {
      return Object.keys(Error)
    } else {
      return []
    }
  }
  get errorsOfpNo() {
    let Error = this.form.get('pNo')?.errors
    if (Error) {
      return Object.keys(Error)
    } else {
      return []
    }
  }
  get errorsOfpinCode() {
    let Error = this.form.get('pinCode')?.errors
    if (Error) {
      return Object.keys(Error)
    } else {
      return []
    }
  }
}
