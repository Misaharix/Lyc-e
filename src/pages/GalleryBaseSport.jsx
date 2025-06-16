import { motion } from 'framer-motion';
import '../Gallery.css'; // Fichier CSS pour les styles
import LSFX from '..//Images/images.jpg';
import BSKTF from '../Images/sporsfx.jpg';
// Données des images et descriptions
const imageData = [
  {
    id: 1,
    src: LSFX,
    title: 'Image 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    src: BSKTF,
    title: 'Image 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    src: 'E:\react\my-app\projet_react\src\Images\images.jpg',
    title: 'Image 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

const GallerySport = () => {
  return (
    <div className="gallery-container">
      {imageData.map((item, index) => (
        <motion.div 
          key={item.id}
          className="gallery-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >                                                                            {/*Animation react*/}
          <div className={`image-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
            <motion.img
              src={item.src}
              alt={item.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
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

export default GallerySport;