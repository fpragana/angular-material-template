import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {MyNavComponent} from './my-nav/my-nav.component';

@Injectable()
export class NavService {
  public navComponent: MyNavComponent;
  public appDrawer: any;
  public fixo: boolean;
  public colapsable: boolean;

  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    if (!this.fixo) {
      this.appDrawer.close();
    } else if (this.colapsable) {
      this.navComponent.isOpen = false;
    }
  }

  public openNav() {
    if (!this.fixo) {
      this.appDrawer.open();
    } else if (this.colapsable) {
      this.navComponent.isOpen = true;
    }
  }
}
