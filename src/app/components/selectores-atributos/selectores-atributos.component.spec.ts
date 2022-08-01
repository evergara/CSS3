import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoresAtributosComponent } from './selectores-atributos.component';

describe('SelectoresAtributosComponent', () => {
  let component: SelectoresAtributosComponent;
  let fixture: ComponentFixture<SelectoresAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectoresAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectoresAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
