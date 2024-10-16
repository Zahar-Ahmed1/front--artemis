import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeClientComponent } from './edite-client.component';

describe('EditeClientComponent', () => {
  let component: EditeClientComponent;
  let fixture: ComponentFixture<EditeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
