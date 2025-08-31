import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUserInfoEditComponent } from './general-user-info-edit.component';

describe('GeneralUserInfoEditComponent', () => {
  let component: GeneralUserInfoEditComponent;
  let fixture: ComponentFixture<GeneralUserInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralUserInfoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralUserInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
