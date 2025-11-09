
import { Box } from "@mui/material";
import Game from './components/Game'
const DATA = {
  India: "New Delhi",
  Russia: "Moscow",
  China: "Beijing",
  France: "Paris",
  Japan: "Tokyo",
  // Germany: "Berlin",
  // Italy: "Rome",
  // Brazil: "Brasília",
  // Canada: "Ottawa",
  // Australia: "Canberra",
  // UnitedStates: "Washington, D.C.",
  // UnitedKingdom: "London",
  // SouthKorea: "Seoul",
  // Mexico: "Mexico City",
  // Spain: "Madrid",
  // SouthAfrica: "Pretoria",
  // Egypt: "Cairo",
  // Argentina: "Buenos Aires",
  // Turkey: "Ankara",
  // SaudiArabia: "Riyadh",
  // Netherlands: "Amsterdam",
  // Sweden: "Stockholm",
  // Norway: "Oslo",
  // Switzerland: "Bern",
  // Greece: "Athens",
  // Thailand: "Bangkok",
  // Indonesia: "Jakarta",
  // Vietnam: "Hanoi",
  // Singapore: "Singapore",
  // NewZealand: "Wellington",
  // Nigeria: "Abuja",
  // Kenya: "Nairobi",
  // Israel: "Jerusalem",
  // Poland: "Warsaw",
  // Portugal: "Lisbon",
  // Austria: "Vienna",
  // Denmark: "Copenhagen",
  // Finland: "Helsinki",
  // Ireland: "Dublin",
  // Philippines: "Manila",
  // Malaysia: "Kuala Lumpur",
  // Chile: "Santiago",
  // Colombia: "Bogotá",
  // Peru: "Lima",
  // Pakistan: "Islamabad",
  // Bangladesh: "Dhaka",
  // Nepal: "Kathmandu",
  // SriLanka: "Colombo",
  // Iran: "Tehran",
  // Iraq: "Baghdad",
  // Qatar: "Doha",
  // UAE: "Abu Dhabi",
};

function App() {
  return (
    <div style={{ padding: 20, width: '97%' }}>
      <Box sx={{ p: 2 }}>
        <Game data={DATA} />
      </Box>
    </div>
  );
}

export default App;
