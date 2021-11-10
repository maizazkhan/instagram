import Autolinker from 'autolinker';

export class UrlHelper {
  // public static convertLinks(text: string) {
  //   const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  //   return text.replace(urlRegex, function (url) {
  //     return '<a href=\"' + url + '\">' + url + '</a>';
  //   });
  // }

  public static convertLinks(text: string) {
    return Autolinker.link(text);
  }

  public static replaceNewLines(text: string) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
}
