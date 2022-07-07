import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetComponentComponent } from './bottom-sheet-component.component';

describe('BottomSheetComponentComponent', () => {
  let component: BottomSheetComponentComponent;
  let fixture: ComponentFixture<BottomSheetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
