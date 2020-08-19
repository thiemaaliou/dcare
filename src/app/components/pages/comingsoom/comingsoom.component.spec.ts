import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingsoomComponent } from './comingsoom.component';

describe('ComingsoomComponent', () => {
  let component: ComingsoomComponent;
  let fixture: ComponentFixture<ComingsoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingsoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingsoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
