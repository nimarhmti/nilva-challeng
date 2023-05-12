import text from "../assets/lan/persian.json";
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

const chooseMonth = (month: string) => {
  switch (month) {
    case text.NUMBERS[1]:
      return text.MONTH.FAR;
      break;
    case text.NUMBERS[2]:
      return text.MONTH.ORD;
      break;
    case text.NUMBERS[3]:
      return text.MONTH.KOR;
      break;
    case text.NUMBERS[4]:
      return text.MONTH.TIR;
      break;
    case text.NUMBERS[5]:
      return text.MONTH.MOR;
      break;
    case text.NUMBERS[6]:
      return text.MONTH.SHA;
      break;
    case text.NUMBERS[7]:
      return text.MONTH.MEH;
      break;
    case text.NUMBERS[8]:
      return text.MONTH.ABA;
      break;
    case text.NUMBERS[8]:
      return text.MONTH.AZA;
      break;
    case text.NUMBERS[10]:
      return text.MONTH.DAY;
      break;
    case text.NUMBERS[11]:
      return text.MONTH.BAH;
      break;
    case text.NUMBERS[12]:
      return text.MONTH.ESF;
      break;

    default:
      break;
  }
};
//check which day
const dateChecker = (index: number | string, label: string) => {
  if (index == 0) return text.DAYS.YESTERDAY;
  else if (index == 1) return text.DAYS.TODAY;
  else return label;
};
export const persianDateGenerator = () => {
  const date = new Date();
  const allDates = get_all_dates(date.getFullYear(), date.getMonth());

  //convert to SHAMSI Date
  const shamsiDate = allDates.map((item) => {
    return {
      persianDate: new Date(item).toLocaleDateString("fa-IR"),
      engDate: item,
    };
  });

  //map dates handler
  const setLabel = (
    item: { persianDate: string; engDate: string },
    index: any
  ) => {
    const temp = item.persianDate.split("/");
    return {
      id: item.engDate,
      label: dateChecker(index, temp[2] + chooseMonth(temp[1])),
    };
  };

  //final date results
  const finalResults = shamsiDate.map(setLabel);
  return finalResults;
};
