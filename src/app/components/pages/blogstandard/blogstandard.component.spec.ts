import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogstandardComponent } from './blogstandard.component';

describe('BlogstandardComponent', () => {
  let component: BlogstandardComponent;
  let fixture: ComponentFixture<BlogstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
