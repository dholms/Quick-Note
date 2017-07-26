import { NotepadPage } from './app.po';

describe('notepad App', () => {
  let page: NotepadPage;

  beforeEach(() => {
    page = new NotepadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
