import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmSpeakersComponent } from './acm-speakers.component';

describe('AcmSpeakersComponent', () => {
  let component: AcmSpeakersComponent;
  let fixture: ComponentFixture<AcmSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
