import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxHeaderComponent } from './select-box-header.component';

describe('SelectBoxHeaderComponent', () => {
  let component: SelectBoxHeaderComponent;
  let fixture: ComponentFixture<SelectBoxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
