import Header from '../components/Header';
import Footer from '../components/Footer';

const Imprint = () => {
  return (
    <div className='bg-[#090c24] text-white min-h-screen'>
      <Header></Header>
      <div className='p-6 max-w-3xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4 text-[#503d74]'>Impressum</h1>
        <p>
          <strong className='text-lime-400'>Angaben gemäß § 5 TMG:</strong>
        </p>
        <p>
          Kareem Kaddah
          <br />
          Westerholtstraße 26
          <br />
          44579 Castrop-Rauxel
        </p>

        <p className='mt-4'>
          <strong className='text-lime-400'>Kontakt</strong>
          <br />
          Telefon: 0171 8073697
          <br />
          E-Mail: kontakt@kdagency.online
        </p>

        <p className='mt-4'>
          <strong className='text-lime-400'>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </strong>
          <br />
          Kareem Kaddah
          <br />
          Westerholtstraße 26
          <br />
          44579 Castrop-Rauxel
        </p>

        <p className='mt-4 text-sm text-gray-500'>
          Hinweis: Umsatzsteuer-ID wird ergänzt, sobald verfügbar.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Imprint;
