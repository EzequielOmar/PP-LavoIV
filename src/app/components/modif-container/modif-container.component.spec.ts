import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifContainerComponent } from './modif-container.component';

describe('ModifContainerComponent', () => {
  let component: ModifContainerComponent;
  let fixture: ComponentFixture<ModifContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
