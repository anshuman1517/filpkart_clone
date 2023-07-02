import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCoinZoneComponent } from './super-coin-zone.component';

describe('SuperCoinZoneComponent', () => {
  let component: SuperCoinZoneComponent;
  let fixture: ComponentFixture<SuperCoinZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCoinZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperCoinZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
