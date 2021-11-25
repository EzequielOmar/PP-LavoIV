import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContainerComponent } from './tabla-container.component';

describe('TablaContainerComponent', () => {
  let component: TablaContainerComponent;
  let fixture: ComponentFixture<TablaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
