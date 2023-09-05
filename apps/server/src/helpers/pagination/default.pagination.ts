import { IsInteger } from '../../decorators/is-integer.decorator';

export class DefaultPagination {
  @IsInteger(1, 1)
  public pageNumber = 1;

  @IsInteger(10, 1)
  public pageSize = 10;

  public skip() {
    return (this.pageNumber - 1) * this.pageSize;
  }
}
