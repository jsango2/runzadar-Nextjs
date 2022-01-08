export const timeStringToFloat = (t) => {
  var arr = t.split(":").map(Number);
  return (arr[0] + arr[1] / 60 + arr[2] / 3600).toFixed(4);
};

export const timeStringToFloatMMSS = (t) => {
  var arr = t.split(":").map(Number);
  return (arr[0] / 60 + arr[1] / 3600).toFixed(4);
};

export const minTommss = (minutes) => {
  var sign = minutes < 0 ? "-" : "";
  var min = Math.floor(Math.abs(minutes));
  var sec = Math.floor((Math.abs(minutes) * 60) % 60);
  return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
};

export const decTohhmmss = (decimalTimeString) => {
  var decimalTime = parseFloat(decimalTimeString);
  decimalTime = decimalTime * 60 * 60;
  var hours = Math.floor(decimalTime / (60 * 60));
  decimalTime = decimalTime - hours * 60 * 60;
  var minutes = Math.floor(decimalTime / 60);
  decimalTime = decimalTime - minutes * 60;
  var seconds = Math.round(decimalTime);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return "" + hours + ":" + minutes + ":" + seconds;
};
