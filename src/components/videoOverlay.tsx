"use client";

import useOnClickOutside from "@/hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  closeOverlay: () => void;
  openOverlay: boolean;
};

const VideoOverlay = ({ closeOverlay, openOverlay }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useOnClickOutside(iframeRef, closeOverlay);

  return (
    <AnimatePresence>
      {openOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-slate-500/70"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="container mx-auto p-16 grid place-items-center h-full"
          >
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/_Rks2oCRS88?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoOverlay;
