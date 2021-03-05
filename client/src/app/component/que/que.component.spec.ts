import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueComponent } from './que.component';

describe('QueComponent', () => {
  let component: QueComponent;
  let fixture: ComponentFixture<QueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
