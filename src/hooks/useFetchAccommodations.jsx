import { useEffect, useState } from "react";

const useFetchAccommodations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
        );
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données relatives aux logements"
          );
        }
        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, loading, error };
};

export default useFetchAccommodations;
