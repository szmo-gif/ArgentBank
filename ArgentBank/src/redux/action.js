// actions.js
export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Server response:', data);  // Vérifie ce que le serveur renvoie

    if (response.ok) {
      localStorage.setItem('token', data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.body.user });  // Envoie l'utilisateur dans le payload
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: data.message });
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};


export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
