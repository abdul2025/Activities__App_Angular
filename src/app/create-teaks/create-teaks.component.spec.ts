import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeaksComponent } from './create-teaks.component';

describe('CreateTeaksComponent', () => {
  let component: CreateTeaksComponent;
  let fixture: ComponentFixture<CreateTeaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTeaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
