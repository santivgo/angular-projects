import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderExternoComponent } from './form-builder-externo.component';

describe('FormBuilderExternoComponent', () => {
  let component: FormBuilderExternoComponent;
  let fixture: ComponentFixture<FormBuilderExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBuilderExternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
