import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;
  sliderTwoWayValue: number = 10;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      radioValue: ['', Validators.required],
      sliderFormsValue: [25, Validators.required]
    });
  }

}
