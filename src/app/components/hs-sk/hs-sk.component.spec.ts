import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSkComponent } from './hs-sk.component';

describe('HsSkComponent', () => {
  let component: HsSkComponent;
  let fixture: ComponentFixture<HsSkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsSkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
