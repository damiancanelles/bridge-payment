import { Injectable, Dependencies} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Application } from '../entities/application.entity';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentsService {
    constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<Application[]>> {
    return this.httpService.get('http://localhost:8000/services');
  }
    
}