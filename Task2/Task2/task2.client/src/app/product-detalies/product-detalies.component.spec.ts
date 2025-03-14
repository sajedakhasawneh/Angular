import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaliesComponent } from './product-detalies.component';

describe('ProductDetaliesComponent', () => {
  let component: ProductDetaliesComponent;
  let fixture: ComponentFixture<ProductDetaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetaliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
