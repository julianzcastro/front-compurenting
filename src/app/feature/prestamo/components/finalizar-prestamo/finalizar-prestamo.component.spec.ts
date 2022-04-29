import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPrestamoComponent } from './finalizar-prestamo.component';

describe('FinalizarPrestamoComponent', () => {
  let component: FinalizarPrestamoComponent;
  let fixture: ComponentFixture<FinalizarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
