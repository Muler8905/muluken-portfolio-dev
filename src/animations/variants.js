// src/animations/variants.js
export const fadeUp = {
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            };
            
            export const fadeLeft = {
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 }
            };
            
            export const fadeRight = {
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 }
            };
            
            export const scaleIn = {
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            };
            