import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent | null;
  let fixture: ComponentFixture<ProductAlertsComponent> | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAlertsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
    fixture?.destroy();
    fixture = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
