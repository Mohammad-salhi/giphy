import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphItemComponent } from './giph-item.component';

describe('SearchViewComponent', () => {
  let component: GiphItemComponent;
  let fixture: ComponentFixture<GiphItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
