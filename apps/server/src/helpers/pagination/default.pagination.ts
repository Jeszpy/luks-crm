import { IsInteger } from '../../decorators/is-integer.decorator';

export class DefaultPagination {
  @IsInteger(1, 1)
  public pageNumber: number;
  @IsInteger(10, 1)
  public pageSize: number;

  public skip() {
    return (this.pageNumber - 1) * this.pageSize;
  }
}
