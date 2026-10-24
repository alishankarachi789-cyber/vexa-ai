'use client'
import { useState } from 'react'
export default function Home(){
  const [prompt,setPrompt]=useState('')
  const [video,setVideo]=useState('')
  const [loading,setLoading]=useState(false)
  const gen=()=>{
    if(!prompt) return alert('Prompt likho!')
    setLoading(true)
    setTimeout(()=>{
      setVideo('https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4')
      setLoading(false)
    },2000)
  }
  return(
    <main>
      <div className="vexa-header">VEXA AI</div>
      <div style={{textAlign:'center',opacity:0.7}}>Super Intelligence Video Generator</div>
      <div className="vexa-card">
        <h3>Bolo kisi bhi zaban me - Video banao!</h3>
        <input className="vexa-input" value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Ek sher jungle me chal raha hai, cinematic..." />
        <button className="vexa-btn" onClick={gen}>{loading?'Ban raha hai...':'Video Generate Karo 🚀'}</button>
        {video && <div style={{marginTop:20}}><video controls src={video} style={{width:'100%',borderRadius:10}}></video><a href={video} download style={{display:'block',marginTop:10,textAlign:'center',color:'#a855f7'}}>Download Video</a></div>}
        <div style={{marginTop:20,fontSize:12,opacity:0.5}}>Powered by VEXA AI - Karachi</div>
      </div>
    </main>
  )
                             }
