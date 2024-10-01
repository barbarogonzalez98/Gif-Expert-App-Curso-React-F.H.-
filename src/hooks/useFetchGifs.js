import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [fetch, setFetch] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
        setFetch({
          data: imgs,
          loading: false,
        });
    });
  }, [category]);

  return fetch; //{data:[], loading:true}
};

export default useFetchGifs;
