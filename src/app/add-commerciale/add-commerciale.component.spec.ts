import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommercialeComponent } from './add-commerciale.component';

describe('AddCommercialeComponent', () => {
  let component: AddCommercialeComponent;
  let fixture: ComponentFixture<AddCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCommercialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
