import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAsTouchedComponent } from './mark-as-touched.component';

describe('MarkAsTouchedComponent', () => {
  let component: MarkAsTouchedComponent;
  let fixture: ComponentFixture<MarkAsTouchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkAsTouchedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkAsTouchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
