import { useEffect, useState } from "react";

const useFetchLodging = (id = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id === "none") {
      setLoading(false);
      return;
    }
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

        if (id) {
          const item = result.find((el) => el.id === id);
          if (item) {
            setData(item);
          } else setError("Pas de logement correspondant");
        } else {
          setData(result);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useFetchLodging;
