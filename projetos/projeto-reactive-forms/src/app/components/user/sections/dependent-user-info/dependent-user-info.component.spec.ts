import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentUserInfoComponent } from './dependent-user-info.component';

describe('DependentUserInfoComponent', () => {
  let component: DependentUserInfoComponent;
  let fixture: ComponentFixture<DependentUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependentUserInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
