module.exports = (filepath) => {
  var XLSX = require("xlsx");
  var workbook = XLSX.readFile(filepath);
  var sheet_name_list = workbook.SheetNames;
  var data = [];
  var validatedData = false;

  sheet_name_list.forEach(function (y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var validateHeaders = [];

    for (z in worksheet) {
      if (z[0] === "!") continue;

      //parse out the column, row, and value
      var col = z.substring(0, 1);
      var row = parseInt(z.substring(1));
      var value = worksheet[z].v;

      //store header names
      if (row == 1) {
        headers[col] = value;
        validateHeaders.push(value);
        continue;
      }

      //validate headers
      if (!validatedData && row == 2) {
        const defaultHeaders = [
          "name",
          "email",
          "grade",
          "phoneNumber",
          "country",
          "city",
        ];

        if (validateHeaders.length < defaultHeaders.length)
          throw Error(
            "One or more columns missing from table, please check your tables columns"
          );
        if (validateHeaders.length > defaultHeaders.length)
          throw Error(
            "Excess number of columns, please check your tables columns"
          );

        defaultHeaders.forEach((header) => {
          if (!validateHeaders.includes(header)) {
            throw Error(`Column "${header}" is missing from table`);
          }
        });

        validatedData = true;
      }

      //add Data
      if (!data[row]) data[row] = {};

      //delete any spaces from email
      if (headers[col] == "email") {
        value = value.replace(/\s/g, "");
      }

      data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
  });

  return data;
};
