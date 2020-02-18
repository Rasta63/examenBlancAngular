import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaussureComponent } from './add-chaussure.component';

describe('AddChaussureComponent', () => {
  let component: AddChaussureComponent;
  let fixture: ComponentFixture<AddChaussureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChaussureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
