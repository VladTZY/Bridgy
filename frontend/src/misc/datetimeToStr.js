export default function datetimeToStr(time) {
  const date = new Date(time);

  const dateStr =
    date.getFullYear() +
    "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getDate()).slice(-2) +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2);

  return dateStr;
}
