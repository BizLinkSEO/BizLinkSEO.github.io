function redirectToOrderPage(service, packageName, price, delivery, da, traffic, features) {
  console.log("🚀 Redirecting with:", service, packageName, price, delivery, da, traffic, features);

  // Ensure all values are properly encoded
  const encodedService = encodeURIComponent(service);
  const encodedPackage = encodeURIComponent(packageName);
  const encodedPrice = encodeURIComponent(price);
  const encodedDelivery = encodeURIComponent(delivery);
  const encodedDA = encodeURIComponent(da);
  const encodedTraffic = encodeURIComponent(traffic);
  const encodedFeatures = encodeURIComponent(features);

  // Construct the URL with DA & Traffic
  const orderUrl = `order.html?service=${encodedService}&package=${encodedPackage}&price=${encodedPrice}&delivery=${encodedDelivery}&da=${encodedDA}&traffic=${encodedTraffic}&features=${encodedFeatures}`;

  console.log("🌍 Redirecting to:", orderUrl);
  window.location.href = orderUrl;
}
