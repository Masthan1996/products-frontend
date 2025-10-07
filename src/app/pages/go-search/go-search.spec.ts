import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoSearch } from './go-search';

describe('GoSearch', () => {
  let component: GoSearch;
  let fixture: ComponentFixture<GoSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
