import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPendingCoursesComponent } from './student-pending-courses.component';

describe('StudentPendingCoursesComponent', () => {
  let component: StudentPendingCoursesComponent;
  let fixture: ComponentFixture<StudentPendingCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPendingCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPendingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
