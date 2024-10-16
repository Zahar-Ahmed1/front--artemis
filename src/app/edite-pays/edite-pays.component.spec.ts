import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditePaysComponent } from './edite-pays.component';

describe('EditePaysComponent', () => {
  let component: EditePaysComponent;
  let fixture: ComponentFixture<EditePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditePaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
