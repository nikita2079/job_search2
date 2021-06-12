import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from './jobs';

// A Pipe transform interface
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // Invokes the transform method with the value of a binding as the first argument,
  // and any parameters as the second argument in list form.
  transform(job: Jobs[] , searchvalue: string): Jobs[] {
    if (!job || !searchvalue) {
      return job;
    }
    // Use filter to search data by first name and last name.
    return job.filter(data =>
      data.title.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  }
}
