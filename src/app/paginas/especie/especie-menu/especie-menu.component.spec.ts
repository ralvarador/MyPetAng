import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieMenuComponent } from './especie-menu.component';

describe('EspecieMenuComponent', () => {
  let component: EspecieMenuComponent;
  let fixture: ComponentFixture<EspecieMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
