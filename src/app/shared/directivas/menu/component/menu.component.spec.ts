import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MaterialModule } from '../../../../core/material.module';
//import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports:[MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created Menu', () => {
    expect(component).toBeTruthy();
  });
});
