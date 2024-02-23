import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SearchLowerPipe implements PipeTransform {
  transform(value: any, _metadata: ArgumentMetadata) {
    if (value && value.search) {
      value.search = value.search.toLowerCase();
    }
    return value;
  }
}
