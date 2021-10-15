import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionNuevoComponent } from './adopcion-nuevo.component';

describe('AdopcionNuevoComponent', () => {
  let component: AdopcionNuevoComponent;
  let fixture: ComponentFixture<AdopcionNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopcionNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
