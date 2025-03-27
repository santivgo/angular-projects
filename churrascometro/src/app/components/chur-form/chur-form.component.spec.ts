import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurFormComponent } from './chur-form.component';

describe('ChurFormComponent', () => {
  let component: ChurFormComponent;
  let fixture: ComponentFixture<ChurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChurFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
