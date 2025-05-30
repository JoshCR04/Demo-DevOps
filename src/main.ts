import './style.css'
import { Card } from "./components/card.ts"

const card = new Card(
  "./public/logo.png",
  "4.040 members",
  "NYC Coders",
  "We are a community of developers prepping for coding interviews, particip...",
  "View",
  "Join"
)
card.renderHTML()