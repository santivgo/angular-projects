import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyButtonComponent } from './dummy-button.component';

describe('DummyButtonComponent', () => {
  let component: DummyButtonComponent;
  let fixture: ComponentFixture<DummyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
