import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  public PrincipalForms = this.fb.group({
    name:["", [Validators.required]],
    age:[""],
    gender:[""],
    mensaje:[""]
  })

constructor (
  private fb: FormBuilder
){}

submit(){}
}


