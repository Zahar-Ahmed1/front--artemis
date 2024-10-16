import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCiviliteComponent } from './edite-civilite.component';

describe('EditeCiviliteComponent', () => {
  let component: EditeCiviliteComponent;
  let fixture: ComponentFixture<EditeCiviliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeCiviliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeCiviliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
