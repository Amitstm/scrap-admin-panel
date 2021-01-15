import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'phone'
})
export class PhonePipe implements PipeTransform {
	transform(value: string): any {
		if (value == null) {
			return '';
		}
		return `(${value.charAt(0)}${value.charAt(1)}${value.charAt(2)}) ${value.charAt(3)}${value.charAt(
			4
		)}${value.charAt(5)}-${value.charAt(6)}${value.charAt(7)}${value.charAt(8)}${value.charAt(9)}`;
	}
}
