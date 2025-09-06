import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDependentListComponent } from './user-dependent-list.component';

describe('UserDependentListComponent', () => {
  let component: UserDependentListComponent;
  let fixture: ComponentFixture<UserDependentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDependentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDependentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
