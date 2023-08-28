import "./styles.css";
import React, { useState } from "react";

const emojiMeanings = {
  "🐶": "Dog",
  "🐱": "Cat",
  "🐭": "Mouse",
  "🐹": "Hamster",
  "🐰": "Rabbit",
  "🐻": "Bear",
  "🐼": "Panda",
  "🦁": "Lion",
  "🐯": "Tiger",
  "🐴": "Horse",
  "🐮": "Cow",
  "🐷": "Pig",
  "🐽": "Pig",
  "🐵": "Monkey",
  "🐨": "Koala",
  "🐘": "Elephant",
  "🦄": "Unicorn",
  "🐦": "Bird",
  "🐤": "Chick",
  "🐥": "Chick",
  "🦆": "Duck",
  "🦅": "Eagle",
  "🦉": "Owl",
  "🦇": "Bat",
  "🐺": "Wolf",
  "🐗": "Boar",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐄": "Cow",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐪": "Camel",
  "🐫": "Camel",
  "🦒": "Giraffe",
  "🐃": "Water Buffalo",
  "🐂": "Ox",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😌": "Relieved Face",
  "😍": "Heart Eyes",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😙": "Kissing Face with Smiling Eyes",
  "😚": "Kissing Face with Closed Eyes",
  "😋": "Face Savoring Food",
  "❤️": "Red Heart",
  "💔": "Broken Heart",
  "✨": "Sparkles",
  "🌟": "Glowing Star",
  "⭐️": "Star",
  "🌈": "Rainbow",
  "☀️": "Sun",
  "🌸": "Cherry Blossom",
  "🌺": "Hibiscus",
  "🌼": "Blossom",
  "🌻": "Sunflower",
  "🌍": "Earth Globe Europe-Africa",
  "🌎": "Earth Globe Americas",
  "🌏": "Earth Globe Asia-Australia",
  "🌕": "Full Moon",
  "🌖": "Waning Gibbous Moon",
  "🌗": "Last Quarter Moon",
  "🌘": "Waning Crescent Moon",
  "🌚": "New Moon Face",
  "🌝": "Full Moon Face",
  "🌛": "First Quarter Moon Face",
  "🌜": "Last Quarter Moon Face",
  "🌞": "Sun with Face",
  "🔥": "Fire",
  "🌊": "Water Wave"
  // ... add more entries here ...
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiMeanings[userInput];

    if (userInput === undefined) {
      setMeaning("Failure to read your emozy");
    } else {
      setMeaning(meaning);
    }
  }

  return (
    <div className="App">
      <h1>EMOZY-PEDIA</h1>
      <input
        className="user-input"
        placeholder="Put an emozy to know its meaning"
        onChange={onChangeHandler}
      />
      <div className="meaning-output">{meaning}</div>
      <div className="emozies-div">
      <abbr className="emozies" title="Red Heart">❤️</abbr>
      <abbr className="emozies" title="broken Heart">💔</abbr>
      <abbr className="emozies" title="Happy Face">😃</abbr>
      <abbr className="emozies" title="Heart Eye">😍</abbr>
      <abbr className="emozies" title="Face Savoring Food">😋</abbr>
      </div>
    </div>
  );
}
