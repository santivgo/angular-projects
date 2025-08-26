import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUserInfoComponent } from './contact-user-info.component';

describe('ContactUserInfoComponent', () => {
  let component: ContactUserInfoComponent;
  let fixture: ComponentFixture<ContactUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUserInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
