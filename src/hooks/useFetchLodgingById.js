import { useEffect, useState } from "react";

export const useFetchLodgingById = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/data/lodging.json");
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données relatives aux logements"
          );
        }
        const result = await response.json();
        if (!result || result.length === 0) {
          setError("Aucun logement trouvé");
        } else {
          const item = result.find((el) => el.id === id);
          if (item) {
            setData(item);
          } else setError("Pas de logement correspondant");
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
  }, [id]);

  return { data, loading, error };
};
