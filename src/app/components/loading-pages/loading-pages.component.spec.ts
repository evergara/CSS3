import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPagesComponent } from './loading-pages.component';

describe('LoadingPagesComponent', () => {
  let component: LoadingPagesComponent;
  let fixture: ComponentFixture<LoadingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LoadingPagesComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
