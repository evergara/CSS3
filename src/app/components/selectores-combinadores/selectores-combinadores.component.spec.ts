import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoresCombinadoresComponent } from './selectores-combinadores.component';

describe('SelectoresCombinadoresComponent', () => {
  let component: SelectoresCombinadoresComponent;
  let fixture: ComponentFixture<SelectoresCombinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectoresCombinadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectoresCombinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
