import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatianaComponent } from './tatiana.component';

describe('TatianaComponent', () => {
  let component: TatianaComponent;
  let fixture: ComponentFixture<TatianaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatianaComponent]
    });
    fixture = TestBed.createComponent(TatianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
