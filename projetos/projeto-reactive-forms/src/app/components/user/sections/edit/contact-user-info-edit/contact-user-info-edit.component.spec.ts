import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUserInfoEditComponent } from './contact-user-info-edit.component';

describe('ContactUserInfoEditComponent', () => {
  let component: ContactUserInfoEditComponent;
  let fixture: ComponentFixture<ContactUserInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUserInfoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUserInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
