import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public PrincipalForms: FormGroup;
  public SecundaryForms: FormGroup;

  constructor(
    private fb:FormBuilder
    ){}
  
ngOnInit(): void{
  this.PrincipalForms= this.fb.group({
    name:[],
    age:[],
    gender:[]
  });
}
this.SecundaryForms = new FormGroup({
  nombre:new FormControl()
});
}
