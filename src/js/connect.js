import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyqLAuEMSC3pkJ4i', // API key is read only
});

const BASE = Airtable.base('appPcyzllmbSK5ir4');

export default BASE;
