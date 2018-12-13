import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {NavItem} from '../nav-item';
import {NavService} from '../nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '15em',
      })),
      state('closed', style({
        width: '4em',
      })),
      transition('open => closed', [
        animate('0.02s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class MyNavComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  fixo = true;

  sidenavWidth = 4;

  @Input() navItems: NavItem[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private navService: NavService) {
  }

  public increase(){
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }

  public decrease(){
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

  ngAfterViewInit() {
    this.navService.navComponent = this;
    this.navService.appDrawer = this.appDrawer;
    this.navService.fixo = true;
    this.navService.colapsable = true;
  }


}
