import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarTransporteComponent } from './reservar-transporte.component';

describe('ReservarTransporteComponent', () => {
  let component: ReservarTransporteComponent;
  let fixture: ComponentFixture<ReservarTransporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarTransporteComponent]
    });
    fixture = TestBed.createComponent(ReservarTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
