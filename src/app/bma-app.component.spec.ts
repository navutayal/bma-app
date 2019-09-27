import { TestBed, async } from '@angular/core/testing';
import { BmaAppComponent } from './bma-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BmaAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BmaAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bookmyappointment'`, () => {
    const fixture = TestBed.createComponent(BmaAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bookmyappointment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BmaAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('bookmyappointment app is running!');
  });
});
