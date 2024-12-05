const express = require("express");
const app = express();
const path = require("path");

// Sample Data:
const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    bio: "Tech enthusiast and blogger",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    bio: "Photographer and nature lover",
  },
  {
    id: 3,
    name: "Julie",
    email: "ju@example.com",
    bio: "Photographer and nature lover",
  },
  {
    id: 4,
    name: "Otis",
    email: "ot@example.com",
    bio: "Photographer and nature lover",
  },
];

const posts = [
  {
    id: 1,
    userId: 1,
    content: "Excited to learn Node.js!",
    likes: 10,
    comments: 2,
    img:'https://tse4.mm.bing.net/th?id=OIP.uPqyetCRhf_EdPPGZsh-TgHaFu&pid=Api&P=0&h=180'
  },
  {
    id: 2,
    userId: 2,
    content: "Captured this beautiful sunrise!",
    likes: 20,
    comments: 5,
    img:'https://tse2.mm.bing.net/th?id=OIP.CjVe3NKstbANktWD2Q9RZAHaEX&pid=Api&P=0&h=180'
  },
  {
    id: 3,
    userId: 3,
    content: "Captured this beautiful sunrise!",
    likes: 20,
    comments: 5,
    img:'https://tse2.mm.bing.net/th?id=OIP.CjVe3NKstbANktWD2Q9RZAHaEX&pid=Api&P=0&h=180'
  },
  {
    id: 4,
    userId: 4,
    content: "Captured this beautiful sunrise!",
    likes: 20,
    comments: 5,
    img:'https://tse2.mm.bing.net/th?id=OIP.CjVe3NKstbANktWD2Q9RZAHaEX&pid=Api&P=0&h=180'
  },
];

const messages = [
  { sender: "Alice", receiver: "Bob", content: "Hey Bob, how are you?" },
  {
    sender: "Bob",
    receiver: "Alice",
    content: "Hi Alice, I'm good. How about you?",
  },
];
const feeds = [
    "https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1733103373160-003dc53ccdba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx80",
    "https://plus.unsplash.com/premium_photo-1733230677536-ebd9121658ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733247399489-7cb199fda872?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
]

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,'/public')))

app.get("/", (req, res) => {
  res.render("home",{posts});
});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.render("user", { users, id });
});
app.get("/messages", (req, res) => {
  res.render("messages",{messages});
});
app.get("/feed", (req, res) => {
  res.render("feed",{feeds});
});
app.get("/profile", (req, res) => {
  res.render("profile",{users});
});
app.get("/error",(req,res)=>{
    res.render("error");
})

app.listen(3000, () => console.log("Server Started..."));
