describe('single note view', function() {
  note = new Note('This is a note')
  singleNoteView = new SingleNoteView(note);
  it ('can take a note and return text in HTML', function() {
    expect(singleNoteView.displaySingleNote()).toBe("<div>This is a note</div>");
  })
})