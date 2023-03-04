import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {

  const[meals,setMeals]= useState([]);
  const[isLoading , setisLoading] = useState(true);
  const [error, setError] = useState();



  useEffect(()=>{
    const fetchMeals = async () => {
     const response =  await fetch('https://reacttutorials-ae7db-default-rtdb.firebaseio.com/Meals.json');

     if (!response.ok) {
      throw new Error('Something went wrong...');
     }
     const responseData = await response.json();
     const loadedMeals = [];
     for (const key in responseData) {
      if (Object.hasOwnProperty.call(responseData, key)) {
          loadedMeals.push({
            id:key,
            name: responseData[key].name,
            price:responseData[key].price,
            description:responseData[key].description,

          })
        
      }
     }
     setMeals(loadedMeals);
     setisLoading(false);
    }
      fetchMeals().catch((error)=>{
        setisLoading(false);
        setError(error.message);
      });
      
  },[])


  if (isLoading) {
    return(
      <section className={classes.MealsLoading}>
        <p>
          Loading...
        </p>
      </section>
    );
  }
  if (error) {
    
    return (
      <section className={classes.mealsError}>
        <p>
          {error};
        </p>
      </section>
    );
  }



  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
  <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;