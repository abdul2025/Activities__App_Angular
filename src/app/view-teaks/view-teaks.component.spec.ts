import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeaksComponent } from './view-teaks.component';

describe('ViewTeaksComponent', () => {
  let component: ViewTeaksComponent;
  let fixture: ComponentFixture<ViewTeaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
