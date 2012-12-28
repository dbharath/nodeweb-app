module.exports = config = {
  port: 2441,
  db_options: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'webapp',
    db_pool: 'nodestore-mysql'
  },
  sphinx: {
    port: 9312,
    reconnectSeconds: 120
  },
  contact_options: {
    store_url: '//localhost:2341',
    email: 'script@urbantouch.com',
    replyTo: 'wecare@urbantouch.co.in',
    phone: '+91-9019-299-299',
    times: '9AM-8PM'
  },
  email: {
    sender: 'UrbanTouch.com <script@urbantouch.com>',
    subjectPrefix: '',
    smtp: {
      host: 'smtp.gmail.com',
      port: 465,
      user: 'script@urbantouch.com',
      pass: 'script@ut!',
      use_authentication: true,
      ssl: true
    }
  },
  invoice: {
    company : 'Cube Online Solutions Private Limited',
    street : 'C-08, Sushant Shopping Arcade, Sushant Lok Phase - 1,',
    city : 'Gurgaon',
    state : 'Haryana',
    pin : '122001',
    phone : '+91-9019-299-299',
    email : 'WeCare@UrbanTouch.com',
    taxInfo : 'TIN No. - 06811831597',
    salesTax : 'ST No. - Applied For',
    footer1:'This is a system generated invoice and does not need any signature.',
    footer2:'Please call on +91-9019-299-299 for any service related issues.',
    footer3:'Claims, if any, should be brought to our notice within 7 days from receipt of products. Subject to Delhi jurisdiction.',
    instatetax:'VAT',
    outstatetax:'CST'
  },
  trackOrder : {
    carrierHomeURL:['Quantium','Speed Post'],
    adOptions:['leftAdv','rgtAdv']
  },
  amon: {
    webstore_key: 'hGROmpb9gDhbin20FDMKtLDW3zgFkC4wDwKMENzT66s',
    admin_key: '5wTpJ3nWy8Q7zQFgNHL1I2qIudCMFUZ3PoiRWRUNI6g',
    script_key: 'AF1GviwK6L3c0RFWZHfDUIcuRKbPe51ZySgqRUUEVo0'
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  logInventory : false,
  forcehttp : true
};
