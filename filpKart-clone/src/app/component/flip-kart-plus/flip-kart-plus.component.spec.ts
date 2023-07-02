import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipKartPlusComponent } from './flip-kart-plus.component';

describe('FlipKartPlusComponent', () => {
  let component: FlipKartPlusComponent;
  let fixture: ComponentFixture<FlipKartPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipKartPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipKartPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
