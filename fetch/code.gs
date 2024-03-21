var ssid = '<< Spreadsheet ID >>';
var tbUsers = SpreadsheetApp.openById(ssid).getSheetByName('<< Sheet Name >>');
function doPost(e) {
  let raw = JSON.parse(e.postData.contents);
  let id = raw.id;
  let name = raw.name;
  let score = parseInt(raw.score);

  let result = false;
  let message = "Failed";

  try {
    tbUsers.appendRow([id, name, score]);
    result = true;
    message = "Completed";
  } catch (e) {
    Logger.log(e);
  }

  let response = {
    'result': result,
    'message': message
  }

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}
