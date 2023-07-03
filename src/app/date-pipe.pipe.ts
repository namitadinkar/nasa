import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  constructor(private _locale: NgLocale) {}


  transform(value: any, args?: string): any {
    if (typeof value !== 'object' || value === null) {
      return value;
    }
    if (!value.getTime) {
      return value;
    }
    const _format = args ? args : 'mediumDate';
    return this._locale.formatDate(value, _format);
  }

}


export class NgLocale {
  constructor(private _locale: ILocale) {}

  formatDate(value: Date, format: string): string {
    return this._locale.formatDate(value, format);
  }

  formatNumber(value: number, style: string, currency: string): string {
    return this._locale.formatNumber(value, style, currency);
  }
}

interface ILocale {
  /**
   * Returns the language code of the locale.
   */
  getLanguage(): string;

  /**
   * Returns the country code of the locale.
   */
  getCountry(): string;

  /**
   * Returns the variant code of the locale.
   */
  getVariant(): string;

  /**
   * Formats a date object in the locale.
   *
   * @param value The date object to format.
   * @param format The format string.
   */
  formatDate(value: Date, format: string): string;

  /**
   * Formats a number in the locale.
   *
   * @param value The number to format.
   * @param style The style of the number.
   * @param currency The currency symbol.
   */
  formatNumber(value: number, style: string, currency: string): string;
}