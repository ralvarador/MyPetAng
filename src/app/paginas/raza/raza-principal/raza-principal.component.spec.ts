import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaPrincipalComponent } from './raza-principal.component';

describe('RazaPrincipalComponent', () => {
  let component: RazaPrincipalComponent;
  let fixture: ComponentFixture<RazaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
