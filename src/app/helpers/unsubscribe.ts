import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

/** This helps track subscriptions that should be torn down when possible.
 *
 * To use this helper:
 * - Extend your component/service class with this (MyClassComponent extends Unsubscribe)
 * - Add subscription references to the 'subscriptions' array (this.unsubscribe(mySubscription))
 * - Call super.ngOnDestroy() in your component/service's ngOnDestroy
 */
export class Unsubscribe implements OnDestroy {
  /** Add subscriptions that you want to ensure get unsubscribed to this. */
  subscriptions = new Subscription();

  ngOnDestroy() {
    this.closeSubscriptions();
  }

  /** Registers a subscription to be cleaned up. Your class should implement OnDestroy.
   * 
   * If your class needs its own cleanup behavior, make sure to call super.ngOnDestroy 
   * in your ngOnDestroy handler so that the subscription cleanup still occurs. */
  unsubscribe(subscription: Subscription) {
    this.subscriptions.add(subscription);
  }

  /** Calls unsubscribe on any un-closed subscriptions in the 'subscriptions' array. */
  closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }
}
