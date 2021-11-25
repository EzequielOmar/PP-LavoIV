import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPaisComponent } from './datos-pais.component';

describe('DatosPaisComponent', () => {
  let component: DatosPaisComponent;
  let fixture: ComponentFixture<DatosPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
