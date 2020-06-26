import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthResultComponent } from './fourth-result.component';

describe('FourthResultComponent', () => {
  let component: FourthResultComponent;
  let fixture: ComponentFixture<FourthResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
