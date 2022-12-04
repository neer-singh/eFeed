import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCustomInputComponent } from './mat-custom-input.component';

describe('MatCustomInputComponent', () => {
  let component: MatCustomInputComponent;
  let fixture: ComponentFixture<MatCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCustomInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
