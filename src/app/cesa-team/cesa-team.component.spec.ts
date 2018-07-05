import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesaTeamComponent } from './cesa-team.component';

describe('CesaTeamComponent', () => {
  let component: CesaTeamComponent;
  let fixture: ComponentFixture<CesaTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesaTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
