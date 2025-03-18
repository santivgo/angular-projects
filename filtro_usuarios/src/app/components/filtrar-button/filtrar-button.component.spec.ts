import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarButtonComponent } from './filtrar-button.component';

describe('FiltrarButtonComponent', () => {
  let component: FiltrarButtonComponent;
  let fixture: ComponentFixture<FiltrarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltrarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
