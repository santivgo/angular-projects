import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentUserInfoEditComponent } from './dependent-user-info-edit.component';

describe('DependentUserInfoEditComponent', () => {
  let component: DependentUserInfoEditComponent;
  let fixture: ComponentFixture<DependentUserInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependentUserInfoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentUserInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
