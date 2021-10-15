import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciePrincipalComponent } from './especie-principal.component';

describe('EspeciePrincipalComponent', () => {
  let component: EspeciePrincipalComponent;
  let fixture: ComponentFixture<EspeciePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeciePrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
