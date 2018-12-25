import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'highlightMatch'
})
export class HighlightMatchPipe implements PipeTransform {

  transform(value: string, matchValue: string): string {
    const regexp = new RegExp( matchValue, 'g' );
    return value.replace( regexp, `<span class="hl">${ matchValue }</span>` );
  }
}
