import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDivComponent } from './service-div.component';

describe('ServiceDivComponent', () => {
  let component: ServiceDivComponent;
  let fixture: ComponentFixture<ServiceDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
