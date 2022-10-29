const URL = 'http://localhost:3000/notes';

export const getData = async (user) => {
  try {
    const response = await fetch(`${URL}?&owner=${user}&isTrash=false`);
    const notes = await response.json();
    return notes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDataTrash = async (user) => {
  try {
    const response = await fetch(`${URL}?&owner=${user}&isTrash=true`);
    const notes = await response.json();
    return notes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postData = async (note) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(URL, options);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${URL}/${id}`, options);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putData = async (id, note) => {
  try {
    const options = {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${URL}/${id}`, options);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
