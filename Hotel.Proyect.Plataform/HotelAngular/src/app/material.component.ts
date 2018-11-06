import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule],
})

export class MaterialModule { }