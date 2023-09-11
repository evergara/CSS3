import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsCSSComponent } from './positions-css.component';

describe('PositionsCSSComponent', () => {
  let component: PositionsCSSComponent;
  let fixture: ComponentFixture<PositionsCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsCSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
