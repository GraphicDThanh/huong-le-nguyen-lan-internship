/**
 * @description convert file image to base 64
 *
 * @param {File} file is file have choice from input
 *
 * @returns {Promise} a promise with result is a url base 64 or an error
 */
const convertBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

/**
 * @description convert a number to a string with abbreviation suffixes (e.g. 1.5K, 2M)
 *
 * @param number the input number to convert
 *
 * @returns a string with abbreviation suffixes
 */
const formatPrice = (value: number): string => {
  let number = 0;

  switch (true) {
    case value >= 1000:
      number = value / 1000;
      return `${number}K`;
    case value >= 1000000:
      number = value / 1000000;
      return `${number}M`;
    default:
      return `${value}`;
  }
};

export { convertBase64, formatPrice };
