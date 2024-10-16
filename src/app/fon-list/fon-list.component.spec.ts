import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonListComponent } from './fon-list.component';

describe('FonListComponent', () => {
  let component: FonListComponent;
  let fixture: ComponentFixture<FonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
