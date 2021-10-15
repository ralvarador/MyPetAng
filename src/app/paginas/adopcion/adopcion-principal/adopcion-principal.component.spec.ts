import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionPrincipalComponent } from './adopcion-principal.component';

describe('AdopcionPrincipalComponent', () => {
  let component: AdopcionPrincipalComponent;
  let fixture: ComponentFixture<AdopcionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopcionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
