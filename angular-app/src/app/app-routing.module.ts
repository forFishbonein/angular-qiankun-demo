import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/sub-angular' : '/' }] //注意：这个地方必须和主应用配置是一样的！
})
export class AppRoutingModule { }
