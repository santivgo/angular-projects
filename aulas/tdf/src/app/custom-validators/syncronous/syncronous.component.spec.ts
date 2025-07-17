import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncronousComponent } from './syncronous.component';

describe('SyncronousComponent', () => {
  let component: SyncronousComponent;
  let fixture: ComponentFixture<SyncronousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncronousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
