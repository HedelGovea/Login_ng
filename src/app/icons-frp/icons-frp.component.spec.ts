import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFrpComponent } from './icons-frp.component';

describe('IconsFrpComponent', () => {
  let component: IconsFrpComponent;
  let fixture: ComponentFixture<IconsFrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsFrpComponent]
    });
    fixture = TestBed.createComponent(IconsFrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
