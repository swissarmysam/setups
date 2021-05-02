import Airtable from 'airtable'; // import package

Airtable.configure({
  endpointUrl: 'https://api.airtable.com', // endpoint
  apiKey: 'keyqLAuEMSC3pkJ4i', // API key is read only
});

const BASE = Airtable.base('appPcyzllmbSK5ir4'); // identifier for setups table

export default BASE;
