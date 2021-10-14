import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaNuevoComponent } from './raza-nuevo.component';

describe('RazaNuevoComponent', () => {
  let component: RazaNuevoComponent;
  let fixture: ComponentFixture<RazaNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
