// import React from "react";

// const Racun = () => {

//   var min = 1;
//   var max = 1001;
//   var nRandom = Math.floor(Math.random() * (max - min) + 1) + min;

//   const dateUpdate = new Date();
//   const fDate = `${dateUpdate.getDate()}. ${dateUpdate.getMonth() +1}. ${dateUpdate.getFullYear()}.`
//   const data = {
//     brojRacuna: nRandom,
//     datum: fDate,
//     items: [
//       {name: "Jabuka", price: 5},
//       {name: "Banana", price: 10},
//       {name: "Kruška", price: 15},
//     ],
//     total: 0,
//   };

//   let sum = 0;
//   for (const i of data.items){
//     sum += i.price
//   }
//   data.total = sum;
//   return (
//     <div style = {{border:"2px solid black", padding: "10px"}}>
//       <h1>Račun</h1>
//       <p>Broj računa: {data.brojRacuna}</p>
//       <p>Datum: {data.datum}</p>

//       <h2 style={{textAlign: "center"}}>Artikli:</h2>
//       <ul>
//         {data.items.map((item, index) => (
//           <li key={index}>
//             {item.name}: {item.price} €
//           </li>
//         ))}
//       </ul>

//       <h2>Ukupan iznos: {data.total} €</h2>
//     </div>
//   );
// };

// export default Racun;
