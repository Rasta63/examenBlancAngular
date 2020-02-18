import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussureDetailComponent } from './chaussure-detail.component';

describe('ChaussureDetailComponent', () => {
  let component: ChaussureDetailComponent;
  let fixture: ComponentFixture<ChaussureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaussureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
