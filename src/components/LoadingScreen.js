import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoEnd = () => {
    setIsLoading(false); // Trigger the exit animation
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }} // Start at full screen
          animate={{ y: 0 }} // Stay in place during playback
          exit={{ y: "-100%" }} // Slide out to the top
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <video
            src="/intro.mp4" // Path to your video in the public folder
            autoPlay
            muted
            onEnded={handleVideoEnd} // Call when video ends
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;


