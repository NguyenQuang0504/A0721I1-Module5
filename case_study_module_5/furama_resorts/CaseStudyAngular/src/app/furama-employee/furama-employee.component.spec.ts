import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaEmployeeComponent } from './furama-employee.component';

describe('FuramaEmployeeComponent', () => {
  let component: FuramaEmployeeComponent;
  let fixture: ComponentFixture<FuramaEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
