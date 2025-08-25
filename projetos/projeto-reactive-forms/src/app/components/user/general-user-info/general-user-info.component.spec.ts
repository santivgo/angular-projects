import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUserInfoComponent } from './general-user-info.component';

describe('GeneralUserInfoComponent', () => {
  let component: GeneralUserInfoComponent;
  let fixture: ComponentFixture<GeneralUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralUserInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
