import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchComponent } from './component/launch/launch.component';
import { PinComponent } from './component/pin/pin.component';
import { QueComponent } from './component/que/que.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/', 
  pathMatch: 'full'
}, {  
  path: '',
  component: LaunchComponent 
}, {  
  path: 'pin',
  component: PinComponent
}, {  
  path: 'que',
  component: QueComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }