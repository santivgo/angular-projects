import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmationUnsavedComponent } from './user-confirmation-unsaved.component';

describe('UserConfirmationUnsavedComponent', () => {
  let component: UserConfirmationUnsavedComponent;
  let fixture: ComponentFixture<UserConfirmationUnsavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserConfirmationUnsavedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfirmationUnsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
