import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviliteListComponent } from './civilite-list.component';

describe('CiviliteListComponent', () => {
  let component: CiviliteListComponent;
  let fixture: ComponentFixture<CiviliteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiviliteListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiviliteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
