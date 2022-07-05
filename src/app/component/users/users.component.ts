import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: CommonService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  public userData: Users = [];

  userForm = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    status: [false],
  });

  getUsers() {
    if (this.cs.getData('users') != null) {
      this.userData = this.cs.getData('users');
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.cs.setData('users', [
        ...this.userData,
        {
          ...this.userForm.value,
          id: Math.floor(Math.random() * 100000000),
        },
      ]);
      this.handleClear();
      this.getUsers();
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
    this.cs.setData('users', this.userData);
  }
  handleDelete(id: any) {
    this.userData = this.userData.filter((item) => item.id != id);
    this.cs.setData('users', this.userData);
  }
}

type Users = Array<{ id: number; name: string; city: string; status: boolean }>;
type User = { id: number; name: string; city: string; status: boolean };
