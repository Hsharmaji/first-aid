import { ComponentFixture, TestBed } from '@angular/core/testing';
import{logincomponent} from './login.component';

describe('LoginComponent', () => {
  let component: logincomponent;
  let fixture: ComponentFixture<logincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ logincomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(logincomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
