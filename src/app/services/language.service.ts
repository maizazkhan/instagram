import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  getText(key: string, params: any = null): string {
    if (params != null) {
      return this.translateService.instant(key, params);
    } else {
      return this.translateService.instant(key);
    }
  }
}
