import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({

      email:[''],
      pass:['']

    })

  }

  register(){

    this.submitted = true;

    if(this.submitted === true){
      localStorage.setItem('data',JSON.stringify(this.form.value))
      alert('done')
    }else{
      alert('not done')
    }

  }

}
