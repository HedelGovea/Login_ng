import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFrpComponent } from './header-frp.component';

describe('HeaderFrpComponent', () => {
  let component: HeaderFrpComponent;
  let fixture: ComponentFixture<HeaderFrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFrpComponent]
    });
    fixture = TestBed.createComponent(HeaderFrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
