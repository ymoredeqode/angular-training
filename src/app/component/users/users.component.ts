import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BottomSheetComponentComponent } from 'src/app/shared/bottom-sheet-component/bottom-sheet-component.component';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private cs: CommonService,
    private bottomSheet: MatBottomSheet,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  public userData: Users = [];

  userForm = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    status: [false],
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getUsers() {
    if (this.cs.getData('users') != null) {
      this.userData = this.cs.getData('users');
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.cs.setData('users', [
        ...this.userData,
        {
          ...this.userForm.value,
          id: Math.floor(Math.random() * 100000000),
        },
      ]);
      this.openSnackBar('Added Successfully', 'Close');
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
    this.openSnackBar('Deleted Successfully', 'Close');
  }

  openBottomSheet(id: any) {
    let sheetRef = this.bottomSheet.open(BottomSheetComponentComponent, {
      data: id,
    });

    sheetRef.afterDismissed().subscribe((data) => {
      if (data && data.status === true) {
        this.handleDelete(data.data);
      }
    });
  }
}

type Users = Array<{ id: number; name: string; city: string; status: boolean }>;
