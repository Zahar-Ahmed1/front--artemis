import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddedComponent } from './forbidded.component';

describe('ForbiddedComponent', () => {
  let component: ForbiddedComponent;
  let fixture: ComponentFixture<ForbiddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForbiddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
