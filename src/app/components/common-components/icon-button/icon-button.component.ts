import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() name: string;
  @Input() ios: string;
  @Input() md: string;
  @Input() src: string;
  @Input() color: string;
  @Input() disabled = false;
  @Input() size: string;  // Values: extra-small, small, default, large, extra-large

  colorToUse() {
    if (this.disabled) {
      return 'medium';
    } else {
      return this.color;
    }
  }

  iconClicked() {
    if (this.disabled) {
      event.stopPropagation();
    }
  }
}
