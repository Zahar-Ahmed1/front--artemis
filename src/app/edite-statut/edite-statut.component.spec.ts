import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeStatutComponent } from './edite-statut.component';

describe('EditeStatutComponent', () => {
  let component: EditeStatutComponent;
  let fixture: ComponentFixture<EditeStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeStatutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
