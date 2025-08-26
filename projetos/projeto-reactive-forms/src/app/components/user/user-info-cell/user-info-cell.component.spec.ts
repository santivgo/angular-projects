import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoCellComponent } from './user-info-cell.component';

describe('UserInfoCellComponent', () => {
  let component: UserInfoCellComponent;
  let fixture: ComponentFixture<UserInfoCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
