var ssid = '<< Spreadsheet ID >>';
function doPost(e) {
  let postdata = JSON.parse(e.postData.contents);
  let id = postdata.id;
  let title = postdata.title;
  let price = postdata.price;
  SpreadsheetApp.openById(ssid).getSheetByName('data').appendRow([id, title, price]);

  let result = {
    result: true,
    msg: 'Commpleted'
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}