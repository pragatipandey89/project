import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerHomePageComponent } from './buyer-home-page.component';

describe('BuyerHomePageComponent', () => {
  let component: BuyerHomePageComponent;
  let fixture: ComponentFixture<BuyerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
