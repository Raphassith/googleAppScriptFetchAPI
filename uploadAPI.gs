var ssid = "<< SSID >>";

function doPost(e) {
  let data = JSON.parse(e.postData.contents);
  let subject = data.subject;
  let detail = data.detail;
  let rawLog = data.rawLog;
  let filetype = data.filetype;
  let filename = data.filename;
  let date = Utilities.formatDate(new Date(), "GMT+7", "yyyy-MM-dd");
  let time = Utilities.formatDate(new Date(), "GMT+7", "HH:mm:ss");

  let photo = fileUpload(rawLog, filetype, filename);

  let result = {
    "date": date,
    "time": time,
    "subject": subject,
    "detail": detail,
    "photo": photo
  };

  SpreadsheetApp.openById(ssid).getSheetByName('<< Sheet Name >>').appendRow([date, time, subject, detail, photo]);
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function fileUpload(rawLog, type, filename) {
  let datafile = Utilities.base64Decode(rawLog);
  let blob2 = Utilities.newBlob(datafile, type, filename);
  let folder = DriveApp.getFoldersByName("<< Folder Name >>");
  let newFile = folder.next().createFile(blob2);
  let fileUrl = 'https://drive.google.com/uc?id=' + newFile.getId();
  return fileUrl;
}
