import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusDivComponent } from './menus-div.component';

describe('MenusDivComponent', () => {
  let component: MenusDivComponent;
  let fixture: ComponentFixture<MenusDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
