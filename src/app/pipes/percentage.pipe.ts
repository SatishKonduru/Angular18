import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true
})
export class PercentagePipe implements PipeTransform {

  transform(score: any, total: any, decimal = 2){
    console.log("Percentage Pipe is Called.....")
    return ((score/total) * 100).toFixed(decimal)+'%' ;
  }

}
