import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosotrosComponent } from './mosotros.component';

describe('MosotrosComponent', () => {
  let component: MosotrosComponent;
  let fixture: ComponentFixture<MosotrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosotrosComponent]
    });
    fixture = TestBed.createComponent(MosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
