function updatemap() {
  console.log("mangrio");
}
updatemap();
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFuZ3JpbzM2IiwiYSI6ImNsYnR1MTdsZjAwdnIzbmthMGVmM205dHQifQ.GTIos4W37NNXte05dCQTeA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 1,
  center: [0, 20],
});
