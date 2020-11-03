// import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
// import { Observable, throwError } from 'rxjs';
// import { RpcException } from '@nestjs/microservices';

// @Catch(RmqException)
// export class ExceptionFilter implements RmqExceptionFilter<RpcException> {
//   catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
//     return throwError(exception.getError());
//   }
// }