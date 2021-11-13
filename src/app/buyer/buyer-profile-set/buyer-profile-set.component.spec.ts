import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProfileSetComponent } from './buyer-profile-set.component';

describe('BuyerProfileSetComponent', () => {
  let component: BuyerProfileSetComponent;
  let fixture: ComponentFixture<BuyerProfileSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerProfileSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProfileSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
