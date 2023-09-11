import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCSSComponent } from './element-css.component';

describe('ElementCSSComponent', () => {
  let component: ElementCSSComponent;
  let fixture: ComponentFixture<ElementCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementCSSComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
