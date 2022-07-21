function testsheet(e) {
  let act = e.parameter.act;
  let postdata = JSON.parse(e.postData.contents);
  let roderID = postdata.roderID.toString();
  let sheet = SpreadsheetApp.getActive().getSheetByName("logs");
  sheet.appendRow([act, roderID]);
  let res = [{ "act": act, "roderID": roderID }];
  return res;
}