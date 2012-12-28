"use strict";

var orderStatusMap = {

orderStatusMapping: function(orderStatus) {

      /*
       * List of order status which are present in nodestore.
       */
      var allAvailableOrderStatus = ['PENDING',
                             'AUTHORIZED',
                             'OPF_PRINTED',
                             'INVOICED',
                             'SHIPMENT_CREATED',
                             'HANDED_OVER_TO_COURIER',
                             'SHIPPED',
                             'RTO_RECEIVED',
                             'DELIVERED',
                             'COURIER_RETURNED',
                             'PEND_CANCEL',
                             'PROCESS_CANCEL',
                             'ON_HOLD',
                             'PAYMENT_REVIEW',
                             'HANDED_OVER_TO_INVENTORY',
                             'FAILED'
                             ];
      /*
       * List of order status which are present in magento but not in nodestore.
       */
      var magentoStatus = ['CANCELED', 'CLOSED', 'COMPLETE', 'HOLDED', 'PROCESSING'];

      orderStatus = orderStatus.toUpperCase();

      if(orderStatus === 'PENDING' || orderStatus === 'PAYMENT_REVIEW'){
        return 'Pending';
      }
      if(orderStatus === 'AUTHORIZED' || orderStatus === 'OPF_PRINTED'){
        return 'Order Confirmed';
      }
      else if(orderStatus === 'INVOICED' || orderStatus === 'SHIPMENT_CREATED' ||
              orderStatus === 'HANDED_OVER_TO_COURIER' || orderStatus === 'PROCESSING' ){
        return 'Processing';
      }
      else if(orderStatus === 'SHIPPED' || orderStatus === 'COMPLETE'){
        return 'Shipped';
      }
      else if(orderStatus === 'DELIVERED'){
        return 'Delivered';
      }
      else if(orderStatus === 'RTO_RECEIVED' || orderStatus === 'COURIER_RETURNED' ||
              orderStatus === 'HANDED_OVER_TO_INVENTORY'){
        return 'Returned';
      }
      else if(orderStatus === 'PEND_CANCEL' || orderStatus === 'PROCESS_CANCEL' ||
              orderStatus === 'CANCELED' || orderStatus === 'CLOSED'){
        return 'Cancelled';
      }
      else if(orderStatus === 'ON_HOLD' || orderStatus === 'HOLDED'){
        return 'On Hold';
      }
      else if(orderStatus === 'MIGRATED'){
        return 'NotVisibleOnFrontEnd';
      }
      else {
        return orderStatus;
      }
    }
};

module.exports = orderStatusMap;