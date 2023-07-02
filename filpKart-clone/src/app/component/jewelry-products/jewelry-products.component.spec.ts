import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryProductsComponent } from './jewelry-products.component';

describe('JewelryProductsComponent', () => {
  let component: JewelryProductsComponent;
  let fixture: ComponentFixture<JewelryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelryProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
