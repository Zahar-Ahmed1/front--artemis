import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCommercialeComponent } from './edite-commerciale.component';

describe('EditeCommercialeComponent', () => {
  let component: EditeCommercialeComponent;
  let fixture: ComponentFixture<EditeCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeCommercialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
