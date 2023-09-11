import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoresBasicosComponent } from './selectores-basicos.component';

describe('SelectoresBasicosComponent', () => {
  let component: SelectoresBasicosComponent;
  let fixture: ComponentFixture<SelectoresBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SelectoresBasicosComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectoresBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
