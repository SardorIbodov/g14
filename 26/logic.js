// const getWeather = async () => {
//   const data = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=41.2647&longitude=69.2163&hourly=temperature_2m&timezone=auto"
//   );
//   const dataJSON = await data.json();
//   for (let i = 0; i < dataJSON.hourly.time.length; i++) {
//     console.log(
//       `${dataJSON.hourly.time[i].slice(
//         11,
//         dataJSON.hourly.time[i].length
//       )} => ${dataJSON.hourly.temperature_2m[i]} C`
//     );
//   }
// };

// const getSomething = () => {
// 	return 2;
// }

// export default getWeather;

