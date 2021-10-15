import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieNuevoComponent } from './especie-nuevo.component';

describe('EspecieNuevoComponent', () => {
  let component: EspecieNuevoComponent;
  let fixture: ComponentFixture<EspecieNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
