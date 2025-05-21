import { useEffect, useState } from "react";

const useFontLoader = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready
      .then(() => {
        setFontsLoaded(true);
      })
      .catch((err) => {
        console.error("Error loading fonts", err);
        setFontsLoaded(false);
      });
  }, []);

  return fontsLoaded;
};

export default useFontLoader;
