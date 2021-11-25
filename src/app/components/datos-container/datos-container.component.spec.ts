import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContainerComponent } from './datos-container.component';

describe('DatosContainerComponent', () => {
  let component: DatosContainerComponent;
  let fixture: ComponentFixture<DatosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
