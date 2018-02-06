import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDivComponent } from './about-us-div.component';

describe('AboutUsDivComponent', () => {
  let component: AboutUsDivComponent;
  let fixture: ComponentFixture<AboutUsDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
