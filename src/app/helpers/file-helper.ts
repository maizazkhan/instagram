import { Observable, Observer } from 'rxjs';

export class FileHelper {
  public static hasValidFileExtension(allowableExtensions: string[], fileName: string): boolean {
    if (fileName != null) {
      const extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
      return (allowableExtensions.indexOf(extension)) >= 0;
    }
    return false;
  }

  public static convertFileToDataUrl(url: any) {
    return new Observable(observer => {
      if (url === '') {
        observer.next('');
        observer.complete();
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(url);
        reader.onload = (readEvent: any) => {
          if (readEvent.target.result != null) {
            observer.next(readEvent.target.result);
            observer.complete();
          }
        };
      }
    });
  }

  public static resizeImage(img, MAX_WIDTH: number, MAX_HEIGHT: number, ignoreOrientation, quality: number): Observable<string> {
    return new Observable((observer: Observer<any>) => {
      if (!img) {
        observer.next(null);
        observer.complete();
      }

      const canvas: any = document.createElement('canvas');
      const image = new Image();

      image.onload = () => {
        let width = image.width;
        let height = image.height;

        let maxHeight = MAX_HEIGHT;
        let maxWidth = MAX_WIDTH;
        if (ignoreOrientation) {
          if ((height >= width && MAX_HEIGHT > MAX_WIDTH) ||
            (width >= height && MAX_WIDTH > MAX_HEIGHT)) {
            maxHeight = MAX_HEIGHT;
            maxWidth = MAX_WIDTH;
          } else {
            maxHeight = MAX_WIDTH;
            maxWidth = MAX_HEIGHT;
          }
        }

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        observer.next(dataUrl);
        observer.complete();
      };

      image.src = img;
    });
  }
}
