import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHySComponent } from './editar-hy-s.component';

describe('EditarHySComponent', () => {
  let component: EditarHySComponent;
  let fixture: ComponentFixture<EditarHySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHySComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
