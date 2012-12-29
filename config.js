module.exports = config = {
  port: 27918,
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
    sender: 'Micro Blog<peeyushsrivastava89@gmail.com>',
    subjectPrefix: '',
    smtp: {
      host: 'smtp.gmail.com',
      port: 465,
      user: 'experttally123@gmail.com',
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
