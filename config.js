module.exports = config = {
  port: 8000,
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
    email: 'devesh.bharathan@dtu.co.in',
    replyTo: 'devesh.bharathan@dtu.co.in',
    phone: '+91-9868-233-519',
    times: '9AM-8PM'
  },
  email: {
    sender: 'Micro Blog<devesh.bharathan@dtu.co.in>',
    subjectPrefix: '',
    smtp: {
      host: 'smtp.gmail.com',
      port: 465,
      user: 'devesh.bharathan@dtu.co.in',
      pass: 'script@ut!',
      use_authentication: true,
      ssl: true
    }
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  logInventory : false,
  forcehttp : true
};
