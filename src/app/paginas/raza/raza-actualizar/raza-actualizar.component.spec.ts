import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaActualizarComponent } from './raza-actualizar.component';

describe('RazaActualizarComponent', () => {
  let component: RazaActualizarComponent;
  let fixture: ComponentFixture<RazaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
