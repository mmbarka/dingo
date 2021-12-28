import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefInformationComponent } from './chef-information.component';

describe('ChefInformationComponent', () => {
  let component: ChefInformationComponent;
  let fixture: ComponentFixture<ChefInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
