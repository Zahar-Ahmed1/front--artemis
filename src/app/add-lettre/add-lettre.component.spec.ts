import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLettreComponent } from './add-lettre.component';

describe('AddLettreComponent', () => {
  let component: AddLettreComponent;
  let fixture: ComponentFixture<AddLettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLettreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
