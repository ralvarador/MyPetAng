import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaListadoComponent } from './raza-listado.component';

describe('RazaListadoComponent', () => {
  let component: RazaListadoComponent;
  let fixture: ComponentFixture<RazaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
