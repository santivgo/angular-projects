import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDummyComponent } from './hero-dummy.component';

describe('HeroDummyComponent', () => {
  let component: HeroDummyComponent;
  let fixture: ComponentFixture<HeroDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDummyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
