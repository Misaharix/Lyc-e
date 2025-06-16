import { motion } from 'framer-motion';
import { useState } from 'react';
import '../test.css';
import LSFX from '../Images/images.jpg';
import OMENA from '../Images/Omena.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageData = [
    {
      id: 1,
      src: LSFX,
      title: 'Image 1',
      description: 'Description de la première image',
      downloadUrl: LSFX
    },
    {
      id: 2,
      src: OMENA,
      title: 'Image 2',
      description: 'Ceci est un image de Omena',
      downloadUrl: OMENA 
    },
  ];

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gallery-container">
      {imageData.map((item, index) => (
        <motion.div 
          key={item.id}
          className="gallery-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`image-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
            <motion.img
              src={item.src}
              alt={item.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(item)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="text-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
          </div>
        </motion.div>
      ))}

      {/* Modal de visualisation avec croix */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Croix de fermeture */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="close-icon"
              aria-label="Fermer"
            >
              &times;
            </button>
            
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-actions">
              <button 
                onClick={() => handleDownload(selectedImage.downloadUrl, `image-${selectedImage.id}.jpg`)}
                className="download-btn"
              >
                Télécharger
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;