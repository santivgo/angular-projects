import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayComGroupComponent } from './form-array-com-group.component';

describe('FormArrayComGroupComponent', () => {
  let component: FormArrayComGroupComponent;
  let fixture: ComponentFixture<FormArrayComGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormArrayComGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayComGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
