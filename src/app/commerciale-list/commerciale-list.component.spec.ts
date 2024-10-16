import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialeListComponent } from './commerciale-list.component';

describe('CommercialeListComponent', () => {
  let component: CommercialeListComponent;
  let fixture: ComponentFixture<CommercialeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
