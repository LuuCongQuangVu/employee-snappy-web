export function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export const camelize = (str) => str.replace(/_([a-z])/g, (childstr) => childstr[1].toUpperCase());

export function convertObjToCamelKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if ('' + key !== camelize('' + key)) {
        obj[camelize('' + key)] = obj[key];
        delete obj[key];
      }
    }
  }
  return obj;
}
