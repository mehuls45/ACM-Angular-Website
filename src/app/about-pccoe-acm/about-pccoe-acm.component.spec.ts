import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPccoeAcmComponent } from './about-pccoe-acm.component';

describe('AboutPccoeAcmComponent', () => {
  let component: AboutPccoeAcmComponent;
  let fixture: ComponentFixture<AboutPccoeAcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPccoeAcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPccoeAcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
