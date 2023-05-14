import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmersCollectionComponent } from './farmers-collection.component';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';
import { ElementRef } from '@angular/core';

describe('FarmersCollectionComponent', () => {
  let component: FarmersCollectionComponent;
  let fixture: ComponentFixture<FarmersCollectionComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getCollections']);

    await TestBed.configureTestingModule({
      declarations: [ FarmersCollectionComponent ],
      providers: [
        { provide: ApiService, useValue: spy },
        { provide: ElementRef, useValue: { nativeElement: {} } }
      ]
    })
    .compileComponents();

    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(FarmersCollectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiService.getCollections on init', () => {
    const collections = [{ id: 1, name: 'collection 1' }];
    apiServiceSpy.getCollections.and.returnValue(of(collections));

    fixture.detectChanges();

    expect(apiServiceSpy.getCollections).toHaveBeenCalled();
    expect(component.collections$).toEqual(of(collections));
  });

  it('should call searchTerms.next when search is called', () => {
    spyOn(component.searchTerms, 'next');

    component.search('search term');

    expect(component.searchTerms.next).toHaveBeenCalledWith('search term');
  });
});
