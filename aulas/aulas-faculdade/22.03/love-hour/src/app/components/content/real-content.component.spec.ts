import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealContentComponent } from './real-content.component';

describe('RealContentComponent', () => {
  let component: RealContentComponent;
  let fixture: ComponentFixture<RealContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
