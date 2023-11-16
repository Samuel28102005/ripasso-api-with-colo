import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PattyComponent } from './patty.component';

describe('PattyComponent', () => {
  let component: PattyComponent;
  let fixture: ComponentFixture<PattyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PattyComponent]
    });
    fixture = TestBed.createComponent(PattyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
