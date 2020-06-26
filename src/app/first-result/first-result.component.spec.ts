import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstResultComponent } from './first-result.component';

describe('FirstResultComponent', () => {
  let component: FirstResultComponent;
  let fixture: ComponentFixture<FirstResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
