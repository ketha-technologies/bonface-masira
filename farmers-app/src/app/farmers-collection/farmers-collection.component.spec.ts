import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersCollectionComponent } from './farmers-collection.component';

describe('FarmersCollectionComponent', () => {
  let component: FarmersCollectionComponent;
  let fixture: ComponentFixture<FarmersCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmersCollectionComponent]
    });
    fixture = TestBed.createComponent(FarmersCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
