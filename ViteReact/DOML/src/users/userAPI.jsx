export const fetchAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dummyjson.com/users?limit=20");
      if (!response.ok) {
        reject({ message: "couldnt connect to users" });
        throw new Error(response.statusText);
      }
      const data = await response.json();
      resolve({ data: data });
    } catch (error) {
      console.error(error);
    }
  });
};
