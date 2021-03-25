import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicevindueComponent } from './servicevindue.component';

describe('ServicevindueComponent', () => {
  let component: ServicevindueComponent;
  let fixture: ComponentFixture<ServicevindueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicevindueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicevindueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
