import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeContactComponent } from './edite-contact.component';

describe('EditeContactComponent', () => {
  let component: EditeContactComponent;
  let fixture: ComponentFixture<EditeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
