import React from 'react';
// import phoneImg from './images/phone.svg'; // Eğer kullanmak isterseniz, bu satırı etkinleştirin
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext(); // closeSubmenu fonksiyonunu kullanın
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          {/* Hero bilgileri buraya eklenebilir */}
        </article>
        <article className="hero-images">
          {/* Hero resimleri buraya eklenebilir */}
        </article>
      </div>
    </section>
  );
};

export default Hero;
