import { motion } from 'framer-motion';
import '../Photo.css'; // Fichier CSS pour les styles
import LSFX from '../Images/images.jpg';


const PhotoDescription = ({ imageUrl, title, description }) => {
 const galleryItems = [
    {
      id: 1,
      imageSrc: LSFX, // Utilisation de l'import direct
      title: "Titre Image 1",
      description: "Description complète de la première image"
    },
    {
      id: 2,
      imageSrc: LSFX,
      title: "Titre Image 2",
      description: "Description de la deuxième image"
    },
    {
      id: 3,
      imageSrc: LSFX,
      title: "Titre Image 3",
      description: "Description de la troisième image"
    },

    {
      id: 3,
      imageSrc: LSFX,
      title: "Titre Image 3",
      description: "Description de la troisième image"
    }
  ];

  return (
    <div className="photo-gallery">
      {galleryItems.map((item, index) => (
        <motion.div 
          key={item.id}
          className="gallery-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="image-container">
            <motion.img
              src={item.imageSrc}
              alt={item.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />                                         {/*Image Url et Title et Description*/}
          </div>
          <div className="text-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoDescription;