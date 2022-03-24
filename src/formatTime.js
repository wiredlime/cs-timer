export const formatTime = (time) => {
  function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
  const getSeconds = pad(time % 60);
  const getMinutes = pad(parseInt(time / 60));
  const getHours = pad(parseInt(time / 120));
  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
