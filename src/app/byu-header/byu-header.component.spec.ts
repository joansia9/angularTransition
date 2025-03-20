import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByuHeaderComponent } from './byu-header.component';

describe('ByuHeaderComponent', () => {
  let component: ByuHeaderComponent;
  let fixture: ComponentFixture<ByuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByuHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
