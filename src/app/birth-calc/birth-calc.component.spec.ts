import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthCalcComponent } from './birth-calc.component';

describe('BirthCalcComponent', () => {
  let component: BirthCalcComponent;
  let fixture: ComponentFixture<BirthCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
