"use client";

import useOnClickOutside from "@/hooks/useClickOutside";
import useScrollBlock from "@/hooks/useScrollBlock";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  id: string;
  closeOverlay: () => void;
  openOverlay: boolean;
};

const VideoOverlay = ({ closeOverlay, openOverlay, id }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useOnClickOutside(iframeRef, closeOverlay);

  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (openOverlay) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [openOverlay]);

  return (
    <AnimatePresence>
      {openOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed z-20 inset-0 bg-slate-500/70"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="container mx-auto p-4 grid place-items-center h-full lg:p-16"
          >
            <iframe
              ref={iframeRef}
              className="w-full aspect-video"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
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
