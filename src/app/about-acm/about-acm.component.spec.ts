import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAcmComponent } from './about-acm.component';

describe('AboutAcmComponent', () => {
  let component: AboutAcmComponent;
  let fixture: ComponentFixture<AboutAcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
