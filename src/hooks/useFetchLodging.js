import { useEffect, useState } from "react";

export const useFetchLodging = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/lodging.json");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }
        const result = await response.json();
        if (!result || result.length === 0) {
          setError("Aucun logement trouvé");
        } else {
          setData(result);
        }
      } catch (error) {
        setError(
          "Une erreur est survenue lors de la récupération des données. Merci de réessayer ultérieurement"
        );
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
