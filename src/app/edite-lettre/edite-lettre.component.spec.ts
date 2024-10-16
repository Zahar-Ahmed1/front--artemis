import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeLettreComponent } from './edite-lettre.component';

describe('EditeLettreComponent', () => {
  let component: EditeLettreComponent;
  let fixture: ComponentFixture<EditeLettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeLettreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
