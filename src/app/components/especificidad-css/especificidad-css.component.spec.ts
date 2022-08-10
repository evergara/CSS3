import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificidadCSSComponent } from './especificidad-css.component';

describe('EspecificidadCSSComponent', () => {
  let component: EspecificidadCSSComponent;
  let fixture: ComponentFixture<EspecificidadCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificidadCSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificidadCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
