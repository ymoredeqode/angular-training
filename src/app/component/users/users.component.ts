import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  public userData: Users = [];

  userForm = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    status: [false],
  });

  onSubmit() {
    if (this.userForm.valid) {
      this.userData.push({
        ...this.userForm.value,
        id: Math.floor(Math.random() * 100000000),
      } as User);
      this.handleClear();
    }
  }
  handleClear() {
    this.userForm.reset();
  }
  handleStatus(id: any) {
    this.userData.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
  }
  handleDelete(id: any) {
    this.userData = this.userData.filter((item) => item.id != id);
  }
}

type Users = Array<{ id: number; name: string; city: string; status: boolean }>;
type User = { id: number; name: string; city: string; status: boolean };
