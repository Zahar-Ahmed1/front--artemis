import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeFonComponent } from './edite-fon.component';

describe('EditeFonComponent', () => {
  let component: EditeFonComponent;
  let fixture: ComponentFixture<EditeFonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeFonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeFonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
