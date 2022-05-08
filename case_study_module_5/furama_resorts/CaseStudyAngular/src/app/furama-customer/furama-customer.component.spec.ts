import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaCustomerComponent } from './furama-customer.component';

describe('FuramaCustomerComponent', () => {
  let component: FuramaCustomerComponent;
  let fixture: ComponentFixture<FuramaCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
