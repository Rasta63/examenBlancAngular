import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaussureComponent } from './edit-chaussure.component';

describe('EditChaussureComponent', () => {
  let component: EditChaussureComponent;
  let fixture: ComponentFixture<EditChaussureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChaussureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
