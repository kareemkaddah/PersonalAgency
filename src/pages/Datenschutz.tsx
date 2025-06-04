// pages/Datenschutzerklaerung.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutzerklaerung = () => {
  return (
    <div className='bg-[#090c24] text-white min-h-screen'>
      <Header></Header>
      <div className='p-6 max-w-3xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4 text-[#503d74] '>
          Datenschutzerklärung
        </h1>
        <p>
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
          personenbezogenen Daten ist uns ein wichtiges Anliegen.
        </p>

        <h2 className='text-xl font-semibold mt-6 text-lime-400'>
          1. Verantwortlicher
        </h2>
        <p>
          Kareem Kaddah
          <br />
          Westerholtstraße 26
          <br />
          44579 Castrop-Rauxel
          <br />
          E-Mail: kontakt@kdagency.online
        </p>

        <h2 className='text-xl font-semibold mt-6 text-lime-400'>
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p>
          Beim Aufruf dieser Website durch den auf Ihrem Endgerät zum Einsatz
          kommenden Browser werden automatisch Informationen an den Server
          unserer Website gesendet. Diese Informationen werden temporär in einem
          sogenannten Logfile gespeichert. Erfasst werden:
        </p>
        <ul className='list-disc list-inside '>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>verwendeter Browser und ggf. das Betriebssystem</li>
          <li>Name Ihres Access-Providers</li>
        </ul>
        <p>
          Diese Daten dienen ausschließlich der technischen Bereitstellung der
          Website (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2 className='text-xl font-semibold mt-6 text-lime-400'>
          3. Weitergabe von Daten
        </h2>
        <p>Eine Übermittlung Ihrer Daten an Dritte findet nicht statt.</p>

        <h2 className='text-xl font-semibold mt-6 text-lime-400'>
          4. Betroffenenrechte
        </h2>
        <p>Sie haben das Recht auf:</p>
        <ul className='list-disc list-inside'>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6'>5. Datensicherheit</h2>
        <p>
          Diese Website nutzt eine SSL-Verschlüsselung zur sicheren Übertragung
          von Daten.
        </p>

        <h2 className='text-xl font-semibold mt-6'>
          6. Aktualität und Änderung
        </h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand:
          04.06.2025.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Datenschutzerklaerung;
