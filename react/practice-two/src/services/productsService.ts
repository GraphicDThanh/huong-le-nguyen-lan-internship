// Constants
import { URL_API } from '@constants';

// Helpers
import { CustomErrors, customErrors } from '@helpers';

/**
 * @description function get all products
 *
 * @param {String} param is endpoint
 *
 * @returns {Array} list products
 */
const getProductsByParam = async <T>(param: string): Promise<T[] | CustomErrors> => {
  try {
    const response = await fetch(
      `${URL_API.BASE_URL}${URL_API.PRODUCTS}?_expand=statuses&_expand=types${param}`,
    );
    const products: T[] = await response.json();
    const listProducts = customErrors(response, products);

    return listProducts;
  } catch (error) {
    return error as CustomErrors;
  }
};

/**
 * @description function delete product by id
 *
 * @param {String} id is id of product
 */
const deleteProduct = async <T>(id: string): Promise<T | CustomErrors> => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${URL_API.BASE_URL}${URL_API.PRODUCTS}/${id}`, options);
    const product: T = await response.json();
    const productItem = customErrors(response, product);

    return productItem;
  } catch (error) {
    return error as CustomErrors;
  }
};

/**
 * @description function update product which is selected
 *
 * @param {String} id is id of product
 * @param {Object} productUpdate is information about product, which is selected
 *
 * @return {Object} product
 */
const updateProduct = async <T>(id: string, productUpdate: T): Promise<T | CustomErrors> => {
  try {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(productUpdate),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${URL_API.BASE_URL}${URL_API.PRODUCTS}/${id}`, options);
    const product: T = await response.json();
    const productItem = customErrors(response, product);

    return productItem;
  } catch (error) {
    return error as CustomErrors;
  }
};

export { updateProduct, getProductsByParam, deleteProduct };
