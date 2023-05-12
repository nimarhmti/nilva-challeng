export const DateFormatter = (time: string | Date) => {
  const d = new Date(time);
  const dateText = d.toTimeString();
  return dateText.split(" ")[0].substring(0, 5);
};
//convert to yyy/mmm/ddd
export const formatDateToY_M_D = (date: Date) => {
  var d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

// get dates of current month
export const get_all_dates = (year: any, month: any) => {
  let date = new Date();
  //get yesterday
  date.setDate(date.getDate() - 1);
  let dates = [];

  let i = 0;

  while (date.getMonth() === month) {
    dates.push(formatDateToY_M_D(date));
    date.setDate(date.getDate() + 1);
    i++;
  }
  return dates;
};
