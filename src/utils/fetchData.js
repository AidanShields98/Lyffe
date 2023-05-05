
export const Data = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };


  export const fetchExercise = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  
  export const addNewWorkout = async (userId, workoutData, accessToken) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/workout/addworkout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          ...workoutData
        })
      });
  
      console.log('Workout plan saved successfully');
  
    } catch (error) {
      console.error('Error saving user workout:', error);
    }
  }

  export const fetchUserWorkout = async (userId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/workout/${userId}`);

    if (!response.ok) {
      console.error('Error fetching user workout:', response.status);
      return null;
    }

    const responseText = await response.text();
    const data = JSON.parse(responseText);
    return data;

  } catch (error) {
    console.error('Error fetching user workout:', error);
    return null;
  }
};

export const deleteUserWorkout = async (userId, accessToken) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/workout/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      console.log("Workout plan deleted successfully");
      return true;
    } else {
      console.error("Error deleting workout plan:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error deleting workout plan:", error);
    return false;
  }
};

export const saveUserWorkout = async (userId, workoutId, newData, accessToken) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/workout/${userId}/${workoutId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    if (response.ok) {
      console.log("Workout updated successfully");
      return true;
    } else {
      console.error("Error updating workout:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error updating workout:", error);
    return false;
  }
};