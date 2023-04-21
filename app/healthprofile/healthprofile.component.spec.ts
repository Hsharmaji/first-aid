import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthprofileComponent } from './healthprofile.component';

describe('HealthprofileComponent', () => {
  let component: HealthprofileComponent;
  let fixture: ComponentFixture<HealthprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
