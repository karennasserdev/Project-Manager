import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColumnComponent } from './modal-column.component';

describe('ModalColumnComponent', () => {
  let component: ModalColumnComponent;
  let fixture: ComponentFixture<ModalColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
