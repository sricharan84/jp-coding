import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-service.service';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    UserAddFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
