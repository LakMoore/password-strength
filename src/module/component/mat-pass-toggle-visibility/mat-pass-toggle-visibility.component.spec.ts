import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatPassToggleVisibilityComponent} from './mat-pass-toggle-visibility.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

describe('MatPassToggleVisibilityComponent', () => {
  let component: MatPassToggleVisibilityComponent;
  let fixture: ComponentFixture<MatPassToggleVisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatButtonModule],
      declarations: [MatPassToggleVisibilityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPassToggleVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
