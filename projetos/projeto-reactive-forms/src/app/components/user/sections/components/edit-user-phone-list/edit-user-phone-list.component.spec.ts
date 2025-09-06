import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPhoneListComponent } from './edit-user-phone-list.component';

describe('EditUserPhoneListComponent', () => {
  let component: EditUserPhoneListComponent;
  let fixture: ComponentFixture<EditUserPhoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserPhoneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserPhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
