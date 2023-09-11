import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderInitialComponent } from './border-initial.component';

describe('BorderInitialComponent', () => {
  let component: BorderInitialComponent;
  let fixture: ComponentFixture<BorderInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BorderInitialComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
