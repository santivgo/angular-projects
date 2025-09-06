import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDependentListComponent } from './edit-user-dependent-list.component';

describe('EditUserDependentListComponent', () => {
  let component: EditUserDependentListComponent;
  let fixture: ComponentFixture<EditUserDependentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserDependentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserDependentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
