import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { CellComponent } from './components/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    MatrixComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
