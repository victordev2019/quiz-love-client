import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdResultComponent } from './third-result.component';

describe('ThirdResultComponent', () => {
  let component: ThirdResultComponent;
  let fixture: ComponentFixture<ThirdResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
