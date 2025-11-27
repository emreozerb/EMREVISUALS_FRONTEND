import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  category: string;
  categoryLabel: string;
  youtubeId?: string;
}

// Helper function to get the correct asset path with base URL
const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if it exists, then join with base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// Helper function to get YouTube embed URL
const getYouTubeEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`;
};

const mediaItems: MediaItem[] = [
  // Nürburgring photos
  { type: 'image', src: '/photo/car-shoots/nurburgring/DSC07654.jpg', category: 'nurburgring', categoryLabel: 'Nürburgring' },
  { type: 'image', src: '/photo/car-shoots/nurburgring/DSC07656.jpg', category: 'nurburgring', categoryLabel: 'Nürburgring' },
  { type: 'image', src: '/photo/car-shoots/nurburgring/DSC07660.jpg', category: 'nurburgring', categoryLabel: 'Nürburgring' },
  { type: 'image', src: '/photo/car-shoots/nurburgring/DSC07704.jpg', category: 'nurburgring', categoryLabel: 'Nürburgring' },
  { type: 'image', src: '/photo/car-shoots/nurburgring/DSC07706.jpg', category: 'nurburgring', categoryLabel: 'Nürburgring' },

  // Rotterdam photos
  { type: 'image', src: '/photo/car-shoots/rotterdam/DSC08057.jpg', category: 'rotterdam', categoryLabel: 'Rotterdam' },
  { type: 'image', src: '/photo/car-shoots/rotterdam/DSC08080.jpg', category: 'rotterdam', categoryLabel: 'Rotterdam' },
  { type: 'image', src: '/photo/car-shoots/rotterdam/DSC08144.jpg', category: 'rotterdam', categoryLabel: 'Rotterdam' },

  // Tiguan photos
  { type: 'image', src: '/photo/car-shoots/tiguan/_DSC2624.jpg', category: 'tiguan', categoryLabel: 'Volkswagen Tiguan' },
  { type: 'image', src: '/photo/car-shoots/tiguan/_DSC2716.jpg', category: 'tiguan', categoryLabel: 'Volkswagen Tiguan' },
  { type: 'image', src: '/photo/car-shoots/tiguan/_DSC2895.jpg', category: 'tiguan', categoryLabel: 'Volkswagen Tiguan' },
  { type: 'image', src: '/photo/car-shoots/tiguan/_DSC2906.jpg', category: 'tiguan', categoryLabel: 'Volkswagen Tiguan' },

  // Rest photos
  { type: 'image', src: '/photo/car-shoots/rest/DSC07903.jpg', category: 'rest', categoryLabel: 'Auto Fotografie' },

  // Type-R photos
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00173.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00190.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00203.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00208.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00217.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00240.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00271.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00296.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00322.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00326.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },
  { type: 'image', src: '/photo/car-shoots/type-r/DSC00334.jpg', category: 'type-r', categoryLabel: 'Honda Civic Type-R' },

  // Videos (YouTube embeds)
  { type: 'video', src: '', category: 'turkey', categoryLabel: 'Turkije', youtubeId: 'QnznFTs45UM' }, // Incekum
  { type: 'video', src: '', category: 'turkey', categoryLabel: 'Turkije', youtubeId: '0pWS-3JG4dU' }, // Istanbul
  { type: 'video', src: '', category: 'leuven', categoryLabel: 'Leuven', youtubeId: 'JuTt8BcXLrg' }, // Studax dak
];

export const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState<'photos' | 'videos'>('photos');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredItems = mediaItems.filter((item) => {
    if (selectedFilter === 'photos') return item.type === 'image';
    if (selectedFilter === 'videos') return item.type === 'video';
    return true;
  });

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = {
        label: item.categoryLabel,
        items: []
      };
    }
    acc[item.category].items.push(item);
    return acc;
  }, {} as Record<string, { label: string; items: MediaItem[] }>);

  return (
    <div className="portfolio">
      <div className="portfolio-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('portfolio.title')}</h1>
            <p>{t('portfolio.subtitle')}</p>
          </motion.div>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="container-full">
          <motion.div
            className="filter-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={`filter-btn ${selectedFilter === 'photos' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('photos')}
            >
              {t('portfolio.photosTab')}
              {selectedFilter === 'photos' && (
                <motion.div
                  className="filter-underline"
                  layoutId="filterUnderline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'videos' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('videos')}
            >
              {t('portfolio.videosTab')}
              {selectedFilter === 'videos' && (
                <motion.div
                  className="filter-underline"
                  layoutId="filterUnderline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </motion.div>

          <div className="portfolio-sections">
            {Object.entries(groupedItems).map(([category, { label, items }], index) => (
              <motion.div
                key={category}
                className="category-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="category-header">
                  <h2>{label}</h2>
                  <div className="category-line"></div>
                </div>

                <div className="full-width-gallery">
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.src}
                      className="gallery-item-full"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      onClick={() => setSelectedItem(item)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.type === 'image' ? (
                        <img src={getAssetPath(item.src)} alt={label} loading="lazy" />
                      ) : (
                        <div className="video-container">
                          {item.youtubeId ? (
                            <div className="youtube-thumbnail" style={{
                              backgroundImage: `url(https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg)`
                            }}>
                              <div className="play-overlay">
                                <div className="play-button-large">
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <video src={getAssetPath(item.src)} />
                              <div className="play-overlay">
                                <div className="play-button-large">
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedItem(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img src={getAssetPath(selectedItem.src)} alt={selectedItem.categoryLabel} />
              ) : selectedItem.youtubeId ? (
                <iframe
                  className="youtube-embed"
                  src={getYouTubeEmbedUrl(selectedItem.youtubeId) + '&autoplay=1'}
                  title={selectedItem.categoryLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={getAssetPath(selectedItem.src)} controls autoPlay />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
