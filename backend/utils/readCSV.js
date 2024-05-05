const fs = require("fs");

module.exports = (filepath, separator = ",") => {
  /** Reads a csv file, taking into consideration linebreaks inside of fields, and double quotes or no quotes.
   * Converts it into a json object
   */

  const file = fs.readFileSync(filepath, { encoding: "utf-8" });

  // Figure out how many cells there are by counting the first line.
  // ATTENTION: If your header contains commas or a linebreak, this will fail.
  const firstLineBreak = file.indexOf("\n");
  const rowsNum = file.slice(0, firstLineBreak).split(",").length;

  // Construct a regex based on how many headers there are
  const singleCellRegex = `(?:(?:"([\\s\\S]*?)")|((?:(?:[^"${separator}\\n])|(?:""))+))`;
  let regexText = "";

  for (let i = 0; i < rowsNum; i++) {
    regexText += "," + singleCellRegex;
  }

  const regex = new RegExp(regexText.slice(1), "g");
  const results = file.matchAll(regex);

  const rowsArr = [];
  for (const row of results) {
    const newRow = [];

    for (let i = 0; i < rowsNum; i++) {
      const rowValue = row[2 * i + 1] ?? row[2 * i + 2];
      newRow.push(rowValue.replaceAll("\r", "")); // Remove \r
    }

    rowsArr.push(newRow);
  }

  const headers = rowsArr[0];
  const rows = rowsArr.slice(1);

  const defaultHeaders = [
    "name",
    "email",
    "grade",
    "phoneNumber",
    "country",
    "city",
  ];

  if (headers.length < defaultHeaders.length)
    throw Error(
      "One or more columns missing from table, please check your tables columns"
    );
  if (headers.length > defaultHeaders.length)
    throw Error("Excess number of columns, please check your tables columns");

  defaultHeaders.forEach((header) => {
    if (!headers.includes(header)) {
      throw Error(`Column "${header}" is missing from table`);
    }
  });

  return rows.map((row) =>
    row.reduce((jsonRow, field, idx) => {
      jsonRow[headers[idx]] = field;
      return jsonRow;
    }, {})
  );
};
