import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOutputComponent } from './date-output.component';

describe('DateOutputComponent', () => {
  let component: DateOutputComponent;
  let fixture: ComponentFixture<DateOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
