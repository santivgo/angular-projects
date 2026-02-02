import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmationSavedComponent } from './user-confirmation-saved.component';

describe('UserConfirmationSavedComponent', () => {
  let component: UserConfirmationSavedComponent;
  let fixture: ComponentFixture<UserConfirmationSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserConfirmationSavedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfirmationSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
