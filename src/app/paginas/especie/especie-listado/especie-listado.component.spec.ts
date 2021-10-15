import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieListadoComponent } from './especie-listado.component';

describe('EspecieListadoComponent', () => {
  let component: EspecieListadoComponent;
  let fixture: ComponentFixture<EspecieListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
