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

export default convertBase64;
