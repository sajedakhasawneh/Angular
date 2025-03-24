import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehavComponent } from './subject-behav.component';

describe('SubjectBehavComponent', () => {
  let component: SubjectBehavComponent;
  let fixture: ComponentFixture<SubjectBehavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectBehavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBehavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
