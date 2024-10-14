import React from 'react'
import "./modaladd.scss"
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '100vw' }
};

const ModalAdd = ({ isOpen, toggleModal }) => {
  return (
        <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleModal} // Ferme la modal si on clique sur l'overlay
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur le contenu de la modal
          >
            <button className="close-button" onClick={toggleModal}>
              X
            </button>
            <h2>Fenêtre Modal</h2>
            <form>
              <label className='text__field'>
                Champ 1:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 2:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 3:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 4:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 5:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 6:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 7:
                <input type="text" />
              </label>
              <br />
              <label  className='text__field'>
                Champ 8:
                <input type="text" />
              </label>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalAdd
