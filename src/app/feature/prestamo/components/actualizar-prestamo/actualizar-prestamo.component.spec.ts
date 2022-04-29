import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPrestamoComponent } from './actualizar-prestamo.component';

describe('ActualizarPrestamoComponent', () => {
  let component: ActualizarPrestamoComponent;
  let fixture: ComponentFixture<ActualizarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
