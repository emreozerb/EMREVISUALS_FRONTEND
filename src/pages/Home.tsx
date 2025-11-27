import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Home.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-image-wrapper">
          <img
            src="/photo/car-shoots/tiguan/_DSC2624.jpg"
            alt="EmreVisuals Photography"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className="hero-title" variants={fadeIn}>
              EmreVisuals
            </motion.h1>
            <motion.p className="hero-tagline" variants={fadeIn}>
              {t('home.tagline')}
            </motion.p>
            <motion.div className="hero-cta" variants={fadeIn}>
              <a href="#about" className="btn-primary">
                {t('nav.home')}
              </a>
              <a href="/portfolio" className="btn-secondary">
                {t('nav.portfolio')}
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <motion.div
            className="scroll-line"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('home.aboutTitle')}</h2>
            <div className="about-content">
              <motion.div
                className="about-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p>{t('home.aboutText1')}</p>
                <p>{t('home.aboutText2')}</p>
                <p>{t('home.aboutText3')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="equipment">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('home.equipmentTitle')}</h2>
            <div className="equipment-grid">
              <motion.div
                className="equipment-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="equipment-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <h3>{t('home.camera')}</h3>
                <p>{t('home.cameraDesc')}</p>
              </motion.div>

              <motion.div
                className="equipment-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="equipment-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                  </svg>
                </div>
                <h3>{t('home.drone')}</h3>
                <p>{t('home.droneDesc')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vision">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('home.visionTitle')}</h2>
            <p className="vision-text">{t('home.visionText')}</p>
            <motion.a
              href="/contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.contact')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
