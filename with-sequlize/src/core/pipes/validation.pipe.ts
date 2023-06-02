import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (err) {
      console.log('err msg---excp', err);
      if (err instanceof BadRequestException) {
        console.log('err msg---', err, err.message);
        throw new UnprocessableEntityException(this.handleError(err?.message));
      }
    }
  }

  private handleError(errors) {
    console.log('handleError', errors);
    return errors.map((err) => err);
  }
}
