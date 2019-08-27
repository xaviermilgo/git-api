import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnReposComponent } from "./ReturnReposComponent";

describe('ReturnReposComponent', () => {
  let component: ReturnReposComponent;
  let fixture: ComponentFixture<ReturnReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
