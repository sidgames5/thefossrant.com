import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const Pop = ({ children, className }) => (
    <motion.span className={className} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.100 }}>{children}</motion.span>
);

const SlideUp = ({ children, className, id }) => (
    <motion.div
        // style={{ display: "inline-block" }}
        id={id}
        className={className}
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
    >
        {children}
    </motion.div>
);

function Reveal({ children, className }) {
    return (
        <div className={className} style={{display: "inline-block"}}>{children}</div>
    );
}

const HoverBig = ({ children, className }) => (
    <motion.div className={className}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.250, ease: "easeInOut", delay: 0 }}>{children}</motion.div >
);

export { Pop, SlideUp, Reveal, HoverBig }