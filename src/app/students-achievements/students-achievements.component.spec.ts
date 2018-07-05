import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAchievementsComponent } from './students-achievements.component';

describe('StudentsAchievementsComponent', () => {
  let component: StudentsAchievementsComponent;
  let fixture: ComponentFixture<StudentsAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
