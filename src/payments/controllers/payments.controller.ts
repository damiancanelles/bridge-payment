import { HttpModule, HttpService } from '@nestjs/axios';
import { Controller, Get, Req, Res, Param, Post, Body, Put } from '@nestjs/common';
import { PaymentsService } from '../services/payments.service';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { RequestDto } from '../dto/request.dto';
import https from 'https';

@Controller('api/payments')
export class PaymentsController {
    constructor(private httpRequest: HttpService) {}
    @Post()
    async findAll(@Body() body:RequestDto){
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        console.log(body.details)
        return this.httpRequest.post('https://apisandbox.enzona.net/payment/v1.0.0/payments',body.details,{headers: {'Accept': 'application/json','Content-Type': 'application/json','Authorization':'Bearer 199524a7-b755-3bf2-920c-d11a6cdf6422'}}).pipe(
            map((obj: AxiosResponse) => { return obj.data } )
        );
    }
}