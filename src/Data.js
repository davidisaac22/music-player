import { v4 as uuidv4 } from 'uuid';

function chillHop () {
    return [
        {
            name: "Making a Way",
            cover: "https://chillhop.com/wp-content/uploads/2022/07/e435a424c2a637c19d2241dea2399a4813d984b3-1024x1024.jpg",
            artist: "The BREED",
            audio: "https://stream.chillhop.com/mp3/41956",
            color: ["#C5BAA2","#AA3420"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Flip Flop Vibe",
            cover: "https://assets-global.website-files.com/5fc4bca9bd65e8f2bf87f576/60b4b8806262736151296ccc_Chillhop-E2021-02-Summer-Album-Digital-Cover-v01%201-p-800.webp",
            artist: "The BREED",
            audio: "https://stream.chillhop.com/mp3/16187",
            color: ["#EC7754","#F9D8A4"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Praliné",
            cover: "https://chillhop.com/wp-content/uploads/2023/09/7aca513fc52f55cb5143b51e6d3a146da1e0cb7c-1024x1024.jpg",
            artist: "The BREED",
            audio: "https://stream.chillhop.com/mp3/8958",
            color: ["#F5A1A0","#EA7F85"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Suave",
            cover: "https://chillhop.com/wp-content/uploads/2024/03/34fa3486c3dd84ca47418858778a8202f7aba3b2-1024x1024.jpg",
            artist: "Enough Cereals",
            audio: "https://stream.chillhop.com/mp3/74444",
            color: ["#BF7741","#B0B0A2"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Jade",
            cover: "https://chillhop.com/wp-content/uploads/2023/10/38731803e8cbc15c8d6c92ce7f3137c4b2489362-1024x1024.jpg",
            artist: "Bao, Venuz Beats, Justin Wyatt",
            audio: "https://stream.chillhop.com/mp3/69640",
            color: ["#6B2639","#FEAB83"],
            id: uuidv4(),
            active: false,
        }
    ]
};

export default chillHop;