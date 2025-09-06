import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAddressListComponent } from './edit-user-address-list.component';

describe('EditUserAddressListComponent', () => {
  let component: EditUserAddressListComponent;
  let fixture: ComponentFixture<EditUserAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserAddressListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
