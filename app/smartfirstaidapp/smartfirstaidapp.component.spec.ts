import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartfirstaidappComponent } from './smartfirstaidapp.component';

describe('SmartfirstaidappComponent', () => {
  let component: SmartfirstaidappComponent;
  let fixture: ComponentFixture<SmartfirstaidappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartfirstaidappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartfirstaidappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
