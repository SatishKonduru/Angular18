import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

transform(list: any[], filterBy: string) {
  console.log("Filter pipe called....")
  console.log("Filter by: ",filterBy)
  if(filterBy.toLowerCase() === 'all'){
    return list
  }
  else{
   return  list.filter((std) => {
      return std.gender.toLowerCase() === filterBy.toLowerCase()
  })
  }
}

}
