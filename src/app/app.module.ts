import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MdToolbarModule, MdSidenavModule, MdButtonModule,MdListModule,MdInputModule,MdIconModule,MdDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotepadComponent } from './components/notepad/notepad.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NoteListComponent } from './components/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    DialogComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdIconModule,
    MdDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
