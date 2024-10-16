import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeVilleComponent } from './edite-ville.component';

describe('EditeVilleComponent', () => {
  let component: EditeVilleComponent;
  let fixture: ComponentFixture<EditeVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeVilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
