import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByuFooterComponent } from './byu-footer.component';

describe('ByuFooterComponent', () => {
  let component: ByuFooterComponent;
  let fixture: ComponentFixture<ByuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByuFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
