import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbautComponent } from './abaut.component';

describe('AbautComponent', () => {
  let component: AbautComponent;
  let fixture: ComponentFixture<AbautComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbautComponent]
    });
    fixture = TestBed.createComponent(AbautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
