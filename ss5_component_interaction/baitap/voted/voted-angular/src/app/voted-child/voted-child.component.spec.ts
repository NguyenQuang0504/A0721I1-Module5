import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedChildComponent } from './voted-child.component';

describe('VotedChildComponent', () => {
  let component: VotedChildComponent;
  let fixture: ComponentFixture<VotedChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotedChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
