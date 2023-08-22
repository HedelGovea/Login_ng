import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFrpComponent } from './home-frp.component';

describe('HomeFrpComponent', () => {
  let component: HomeFrpComponent;
  let fixture: ComponentFixture<HomeFrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFrpComponent]
    });
    fixture = TestBed.createComponent(HomeFrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
