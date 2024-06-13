/**
 * Reads data from a Google Sheet and creates events in a Google Calendar.
 */

// Set up the sheet and calendar
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var calendarId = 'your_calendar_id';

/**
 * Reads data from the sheet and creates events in the calendar.
 */
function createEvents() {
  var data = sheet.getDataRange().getValues();
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  // Loop through the data and create events
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDate = row[1];
    var endDate = row[2];
    var description = row[3];
    
    var event = calendar.createEvent(title, startDate, endDate, {description: description});
  }
}

/**
 * Triggers the createEvents function when the sheet is edited.
 */
function onEdit(e) {
  createEvents();
}