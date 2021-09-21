import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HGiphyComponent } from './hgiphy.component';

describe('HGiphyComponent', () => {
  let component: HGiphyComponent;
  let fixture: ComponentFixture<HGiphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HGiphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
