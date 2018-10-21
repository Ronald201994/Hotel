import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule],
})
export class MaterialModule { }