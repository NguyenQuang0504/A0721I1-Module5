import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackernewsAngularsComponent } from './hackernews-angulars.component';

describe('HackernewsAngularsComponent', () => {
  let component: HackernewsAngularsComponent;
  let fixture: ComponentFixture<HackernewsAngularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackernewsAngularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackernewsAngularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
