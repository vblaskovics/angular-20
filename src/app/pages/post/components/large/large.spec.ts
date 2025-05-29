import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Large } from './large';

describe('Large', () => {
  let component: Large;
  let fixture: ComponentFixture<Large>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Large]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Large);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
