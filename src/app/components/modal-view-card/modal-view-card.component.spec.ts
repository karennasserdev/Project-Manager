import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewCardComponent } from './modal-view-card.component';

describe('ModalViewCardComponent', () => {
  let component: ModalViewCardComponent;
  let fixture: ComponentFixture<ModalViewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
