export const removeDashes = (string) => {
  return string.replace(/[-]/g, ' ');
}

export const capitalize = (string) => {
  return string
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

export const removeEmpty = (obj) => {
  Object.keys(obj).forEach((key) => (obj[key].length === 0) && delete obj[key]);
}
