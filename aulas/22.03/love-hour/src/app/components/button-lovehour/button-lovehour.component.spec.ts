import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLovehourComponent } from './button-lovehour.component';

describe('ButtonLovehourComponent', () => {
  let component: ButtonLovehourComponent;
  let fixture: ComponentFixture<ButtonLovehourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLovehourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLovehourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
