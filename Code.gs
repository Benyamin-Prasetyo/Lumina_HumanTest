// Paste this into Extensions → Apps Script on the response spreadsheet.
// Deploy → New deployment → Web app.
// Execute as: Me. Who has access: Anyone.
// Put the Web app URL in Vercel as GOOGLE_SHEET_URL.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["answered_at", "session_id", "tester", "phase", "event_id", "photo_id"]);
  }
  sheet.appendRow([
    data.answered_at || "",
    data.session_id || "",
    data.tester || "",
    data.phase || "",
    data.event_id || "",
    data.photo_id || ""
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ok: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
