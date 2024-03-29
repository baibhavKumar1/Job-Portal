import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../services/interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ]
})
export class InterceptorModule { }
