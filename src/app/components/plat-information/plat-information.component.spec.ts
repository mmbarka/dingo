import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatInformationComponent } from './plat-information.component';

describe('PlatInformationComponent', () => {
  let component: PlatInformationComponent;
  let fixture: ComponentFixture<PlatInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
