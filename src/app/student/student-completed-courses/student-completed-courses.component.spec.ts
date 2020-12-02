import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompletedCoursesComponent } from './student-completed-courses.component';

describe('StudentCompletedCoursesComponent', () => {
  let component: StudentCompletedCoursesComponent;
  let fixture: ComponentFixture<StudentCompletedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCompletedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCompletedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
