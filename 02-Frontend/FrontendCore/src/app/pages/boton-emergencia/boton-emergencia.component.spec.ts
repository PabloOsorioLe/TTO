import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEmergenciaComponent } from './boton-emergencia.component';

describe('BotonEmergenciaComponent', () => {
  let component: BotonEmergenciaComponent;
  let fixture: ComponentFixture<BotonEmergenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonEmergenciaComponent]
    });
    fixture = TestBed.createComponent(BotonEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
