import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaServiceComponent } from './furama-service.component';

describe('FuramaServiceComponent', () => {
  let component: FuramaServiceComponent;
  let fixture: ComponentFixture<FuramaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
