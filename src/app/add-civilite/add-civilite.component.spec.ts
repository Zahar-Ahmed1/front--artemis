import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCiviliteComponent } from './add-civilite.component';

describe('AddCiviliteComponent', () => {
  let component: AddCiviliteComponent;
  let fixture: ComponentFixture<AddCiviliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCiviliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCiviliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
