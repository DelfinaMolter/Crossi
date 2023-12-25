// SucursalesPage.js

import Image from 'next/image';
import './SucursalesPage.css';
import WhatsApp from '../components/whatsapp/whatsapp';
import { Container } from '@mui/material';

// TODO:

// - centrar el main Check!
// - que la imagen de la sucursal sea de alto como el texto y el mapa juntos. Check!
// - responsivo Check!

const SucursalesPage = () => {
  const sucursales = [
    {
      name: "consti",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.900955630426!2d-57.54943959434871!3d-37.96852311010777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddaf33fdbd01%3A0x2618f686967df412!2sCroissant%20Caf%C3%A9!5e0!3m2!1sen!2sar!4v1699806589653!5m2!1sen!2sar",
      zone: "Constitución",
      address: "Av. Constitución 4399",
      time: "Lunes a domingos de 8am a 20pm",
      contact: "2235033700"
    },
    {
      name: "guemes",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.3262559268956!2d-57.544580624099915!3d-38.016172845633236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddc9fa164a59%3A0x89cb0232259c1fba!2sMart%C3%ADn%20Miguel%20de%20G%C3%BCemes%202978%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1699812169650!5m2!1sen!2sar",
      zone: "Güemes",
      address: "Güemes 2978",
      time: "Lunes a domingos de 8am a 20pm",
      contact: "2233407367"
    },
    {
      name: "cordoba",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.817039090415!2d-57.55399172410046!3d-38.00472784497617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1dc6960bcd%3A0xae733c37d57b1774!2sC%C3%B3rdoba%202361%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1699812022523!5m2!1sen!2sar",
      zone: "Córdoba",
      address: "Córdoba 2361",
      time: "Lunes a domingos de 8am a 20pm",
      contact: "2235033732"
    },
  ];

  return (
    <main className="main">
        <div className="banner">
          <Image src="/sucursales-banner.png" alt="Banner Sucursales" width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }}/>
        </div>
      <Container className='sucursales-container'>
        {sucursales.map((item) => (
          <div key={item.name} className="container"> 
            <div className="imageContainer">
              <Image src={`/${item.name}.png`} alt={item.name} width={409} height={246} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="mapContainer">
              <div className="info"> 
                <p><strong>{`${item.zone}`}</strong></p>
                <p>{`${item.address}`}</p>
                <p>{`${item.time}`}</p>
                <WhatsApp number={item.contact}/>
              </div>
              <iframe
                className="mapIframe"
                src={item.maps}
                style={{ border: 0 }}
                allowFullScreen={{}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}

      </Container>
    </main>
  );
};

export default SucursalesPage;
