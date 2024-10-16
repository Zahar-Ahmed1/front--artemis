import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFonComponent } from './add-fon.component';

describe('AddFonComponent', () => {
  let component: AddFonComponent;
  let fixture: ComponentFixture<AddFonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
