import { useEffect, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Button } from "@mui/material";

const TopButton = () => {
  const [showScrollTopButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <Button size="large" variant="contained" color="primary">
          <ArrowCircleUpIcon
            className="top-btn-position"
            onClick={scrollTop}
            fontSize="large"
          />
        </Button>
      )}
    </div>
  );
};

export default TopButton;
