import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {

  userAddForm: FormGroup;

  @Output()
  addUser = new EventEmitter<User>();

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup(){
    this.userAddForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  add(){
    // only if form is valid emit the user daata
    if(this.userAddForm.valid){
      this.addUser.emit(this.userAddForm.value);
      this.userAddForm.reset();
    }

  }

}