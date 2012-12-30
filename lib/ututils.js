// urbantouch utility functions
// code that is shared between the browser and server goes here
(function (exports) {
  var method;
  var utils = {
    validateTelephone: function (telephone) {
      telephone = this.stringTrim('' + telephone);
      return telephone === '' || telephone.length <= 10 && telephone.charAt(0) !== '0' && (/[0-9]{10}/).test(telephone);
    },
    validatePersonName : function(name){
      name = this.stringTrim('' + name);
      return name && (/^[a-zA-Z0-9.,'\-\s]+$/).test(name);
    },
    validateEmail: function (email) {
        if (email && email.indexOf('@') !== -1) {
          var name = email.substring(0, email.indexOf('@'));
          var domain = email.substring(email.indexOf('@')+1, email.length);
          var nameRegex = /^[a-zA-Z0-9.+_\-]+$/;
          var domainRegex = /^[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
          var retVal = false;

          if (name.match(nameRegex)) {
            retVal = true;

            //email name should not lead or trail with a '.'
            //there should not be multiple dots
            if (name.charAt(0) === '.' || name.charAt(name.length-1) === '.' || name.indexOf('..') !== -1) {
              retVal = false;
            }

            if (retVal) {
              if (domain.match(domainRegex)) {
                //domain name should not lead with a '.' or '-'
                //there should not be multiple dots
                //it should not end with 'web'
                if (domain.charAt(0) === '.' || domain.charAt(0) === '-' || 
                    domain.indexOf('..') !== -1 || domain.substring(domain.length-3, domain.length).toLowerCase() === 'web') {
                  retVal = false;
                } 
              } else {
                retVal = false;

                //it should be a valid IP, may or may not be contained in []
                if (domain.charAt(0) === '[' && domain.charAt(domain.length-1) === ']') {
                  domain = domain.substring(1, domain.length-1);
                } 
                var ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
                if (domain.match(ipRegex)) {
                  retVal = true;
                }
              }//domain regex match check
            }//name matched regex, and didn't have other issues
          }//name matches regex
          return retVal;
        } else {
          return false;
        }
      },
    isKeyNumeric: function (evt) {
      var charCode = evt.which || evt.keyCode;
      if ((charCode > 31) && ((charCode < 48) || (charCode > 57))) {
        return false;
      }
      return true;
    },
    isKeyArrows: function (evt) {
      var charCode = evt.which || evt.keyCode;
      if ((charCode >= 37) && (charCode <= 40)) {
        return true;
      }
      return false;
    },
    isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    },
    hasNumbers:function(t) {
      var regex = /\d/g;
      if(regex.test(t)){
        return true;
      }
      return false;
    },
    hasSpclChar: function(str) {
      var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
      var i = 0;
      for (i; i < str.length; i++) {
       if (iChars.indexOf(str.charAt(i)) !== -1) {
       return true;
       }
     }
    },
    isEmpty: function (map) {
      var key;
      for (key in map) {
        if (map.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
    isNotEmptyString: function (str, def) {
      var code = (str && this.stringTrim(str) !== '');
      if (def === undefined) {
        def = false;
      }
      return code ? str : def;
    },
    isNullorEmpty : function(obj){
      return obj?true:false;
    },
    validatePositiveNumber: function (val) {
      return Number(val) > 0;
    },
    validateWholeNumber: function (val) {
      return Number(val) >= 0;
    },
    sanitizeName: function (name) {
      var sanitizedname = null;
      if (name) {
        sanitizedname = (name[0].toUpperCase() + name.substr(1, name.length)).split(' ')[0];
      }
      return sanitizedname;
    },
    sanitizeEmail: function (email){
       var sanitizedemail = null;
        if (email) {
          sanitizedemail = this.stringTrimAndToLower(email);
        }
        return sanitizedemail;
    },

    stringTrimAndToLower:function(str) {
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '').toLowerCase();
    },

    stringTrim:function(str) {
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },

    startsWith: function(test, input) {
      return input.substr(0, test.length) === test;
    },

    log: function(message) {
      console.log(message);
    },

    /**
     * @returns local time in format YYYY-MM-DD HH:MM:SS
     **/
    currentTime:function() {
       var current = new Date();
      return this.formatTime(current);
    },

    /**
     * @returns local time in format YYYY-MM-DD HH:MM:SS
     * Removes the GMT/IST markers that give us trouble 
     * with node-mysql
     * @params date
     **/
    formatTime: function(d) {
      return [
                d.getFullYear(),
                d.getMonth() + 1,
                d.getDate() 
             ].join('-') + ' ' +
             [ 
                d.getHours(),
                d.getMinutes(),
                d.getSeconds()
             ].join(':');
    },

    /**
     * @returns local date in format YYYY-MM-DD
     * @params date
     **/
    formatDate: function(d) {
      return [
                d.getFullYear(),
                d.getMonth() + 1,
                d.getDate() 
             ].join('-');
    },

    /**
     * @returns local time in format DAY Month DD YYYY HH:MM AM/PM
     * Removes the GMT/IST markers that give us trouble 
     * @params date
     **/

    format12hrDateTime: function(d) {
      var hour=d.getHours();
      var suffix;
      if(hour<12){
        suffix='AM';
      }else{
        suffix='PM';
        hour=hour-12;
      }
      if(hour===0){
        hour=12;
      }
      var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var day=days[d.getDay()];
      var month=months[d.getMonth()];
      var minute=d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes();
      hour=hour<10?'0'+hour:hour;
      return [  day,
                month,
                d.getDate(),
                d.getFullYear()
             ].join(' ') + ' ' +
             [  hour,
                minute
             ].join(':') + ' '+
             [  suffix
             ];
    },
    
    validatePasswordLength:function(val){
      if(val && val.length > 5){
        return true;
      }
      return false;
    },

    isWithoutAsciiChars: function(token){
      var regex = /^[\x00-\x7F]+$/;
      if(token.match(regex)){
        return true;
      }
      return false;
    },

    // function to escape the regex special characters
    escapeString: function(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
  };


  for (method in utils) {
    if (typeof utils[method] === 'function') {
      exports[method] = utils[method];
    }
  }
}(typeof exports === 'undefined' ? this.ututils = {} : exports));
