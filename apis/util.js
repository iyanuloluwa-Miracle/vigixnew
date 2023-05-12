export const createHTTPHeader = authToken => {
  const token =
    authToken === null
      ? '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d'
      : authToken;
  return {
    'x-api-key': `${token}`,
  };
};

export const jsonToHex = json => {
  const jsonString = JSON.stringify(json);
  const buffer = Buffer.from(jsonString, 'utf8');
  const hexString = buffer.toString('hex');
  return hexString;
};

export function paramsObjectToQueryString(payload) {
  const trimmedPayload = trimObject(payload);
  const paramPayloadToArr = Object.keys(trimmedPayload);
  if (!trimmedPayload || paramPayloadToArr.length < 1) return '';
  const queryString = paramPayloadToArr.reduce((acc, element, index, array) => {
    acc = `${array[0] === element ? '?' : ''}${acc}${element}=${
      trimmedPayload[element]
    }${array[array.length - 1] !== element ? '&' : ''}`;

    return acc;
  }, '');

  return queryString;
}

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === 'object' && value.toString().length === 0);

export const trimObject = obj => {
  for (const propName in obj) {
    if (isEmpty(obj[propName])) {
      delete obj[propName];
    }
  }

  return obj;
};
