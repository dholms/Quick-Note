import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Note } from '../../interfaces/note';

import {HttpClient, HttpParams} from '@angular/common/http';



import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {

  notes:Note[];
  currNote:Note;
  user: string;

  constructor(public dialog: MdDialog, private http: HttpClient) {
    this.notes = [];
    this.user = "dholms";
  }

  ngOnInit(){
    this.currNote = this.getEmptyNote();
    this.notes.push(this.currNote);
    this.loadNotes();
  }

  loadNotes(selected:number=0){
    this.http.get('http://localhost:3000/notes', {
      params: new HttpParams().set('user', this.user)
    }).subscribe(data => {
      let arr = data as any[];
      if(arr.length > 0){
        this.notes = [];
        for(let i=0;i< arr.length; i++){
          this.notes.push({
            title:arr[i].title,
            body:arr[i].body,
            time:arr[i].time,
            id:arr[i]._id
          })
        }
        if(selected < this.notes.length && selected > -1){
          selected = this.notes.length-1
        }
        this.currNote=this.notes[selected];
      }else{
        this.newNote();
      }
    })
  }

  saveNote(note:Note){
    const body = {
      note: note,
      user: this.user
    }
    return this.http.post('http://localhost:3000/notes',body);
  }

  selectNote(note){
    if(this.notes.indexOf(note) < 0){
      this.saveNote(note).subscribe(data => {
        this.loadNotes(this.notes.length);
      });
    }
    this.currNote = note;
  }

  updateNote(event){
    this.currNote.time = new Date();
    this.saveNote(this.currNote);
  }

  newNote(){
    this.saveNote(this.getEmptyNote()).subscribe(data => {
      this.loadNotes(this.notes.length);
    });
  }

  deleteNote(){
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.http.delete('http://localhost:3000/notes',{
        params: new HttpParams().set('id', this.currNote.id)
      }).subscribe(data => {
        var i = this.notes.indexOf(this.currNote);
        if(i < 1){
          i = 1;
        }
        this.loadNotes(i-1);
      });
    });
  }

  getEmptyNote(){
    return {
      title:"",
      body:"",
      time: new Date(),
      id:""
    }
  }


}
