function doPost(e) {
  //  let userId = e.parameter.act;
  //  let postdata = JSON.parse(e.postData.contents);
  let result = JSON.stringify(testsheet(e));
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}