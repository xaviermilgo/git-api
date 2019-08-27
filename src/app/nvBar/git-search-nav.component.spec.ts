import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { nvBarComponent } from './nvBar.component';

describe('nvBarComponent', () => {
  let component: nvBarComponent;
  let fixture: ComponentFixture<nvBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ nvBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(nvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
