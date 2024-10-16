import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreListComponent } from './lettre-list.component';

describe('LettreListComponent', () => {
  let component: LettreListComponent;
  let fixture: ComponentFixture<LettreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettreListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LettreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
