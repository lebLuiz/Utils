export const formattingDate = (date: string | Date, hasTime: boolean = false) => {
  const newDate = new Date(date);

  let dateFormate = hasTime ? new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(newDate)
    :
    new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short'
    }).format(newDate);

  return dateFormate;

}

export const convertDateToSendPOST = (dateValue: any) => {
  const date = new Date(dateValue),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), month, day].join("-");
}

export const convertDateToShowInput = (dateValue: any) => {
  const date = new Date(dateValue),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), month, day].reverse().join("/");
}