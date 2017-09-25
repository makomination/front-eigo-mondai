import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigoMondaiComponent } from './eigo-mondai.component';

describe('EigoMondaiComponent', () => {
  let component: EigoMondaiComponent;
  let fixture: ComponentFixture<EigoMondaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigoMondaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigoMondaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
