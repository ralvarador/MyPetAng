import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieActualizarComponent } from './especie-actualizar.component';

describe('EspecieActualizarComponent', () => {
  let component: EspecieActualizarComponent;
  let fixture: ComponentFixture<EspecieActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
