''use client' 
import { useState } from 'react'

export default function Home(){
  const [lang,setLang]=useState('en')
  const [prompt,setPrompt]=useState('')
  const [img,setImg]=useState(null)
  const [imgPrev,setImgPrev]=useState('')
  const [video,setVideo]=useState('')
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState({name:'',jhula:'',loc:'',action:'',time:'8',style:'realistic'})
  const [msgs,setMsgs]=useState([{r:'ai',t:'Hello! I am VEXA AI. Auto language. Type in Urdu or English. I reply in same language. I will make video ONLY what you say.'}])

  const detect=(t)=>/[\u0600-\u06FF]/.test(t)?'ur':'en'
  const add=(r,t)=>{setMsgs(m=>[...m,{r,t
