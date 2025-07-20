import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsObjComponent } from './obs-obj.component';

describe('ObsObjComponent', () => {
  let component: ObsObjComponent;
  let fixture: ComponentFixture<ObsObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsObjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
