const order = {};

/*if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}*/

let city = order.customer?.address?.city;
if (!city) {
  console.log('City is required');
}