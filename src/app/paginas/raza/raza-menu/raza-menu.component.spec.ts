import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaMenuComponent } from './raza-menu.component';

describe('RazaMenuComponent', () => {
  let component: RazaMenuComponent;
  let fixture: ComponentFixture<RazaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
