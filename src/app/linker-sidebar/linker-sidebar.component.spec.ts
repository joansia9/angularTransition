import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkerSidebarComponent } from './linker-sidebar.component';

describe('LinkerSidebarComponent', () => {
  let component: LinkerSidebarComponent;
  let fixture: ComponentFixture<LinkerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
