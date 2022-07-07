import { Component, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-component',
  templateUrl: './bottom-sheet-component.component.html',
  styleUrls: ['./bottom-sheet-component.component.css'],
})
export class BottomSheetComponentComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponentComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  clearBar(): void {
    this.bottomSheetRef.dismiss();
  }

  changeStatus() {
    this.bottomSheetRef.dismiss({
      message: 'Change Status',
      status: true,
      data: this.data,
    });
  }
}
