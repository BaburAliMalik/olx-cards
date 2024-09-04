import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <>
    <h1 className='text-start text-[2rem] text-dark-800 pl-[2.5rem]'>Olx Cards</h1>
    <div className="flex justify-evenly flex-wrap mt-5">
    <Card src="https://images.olx.com.pk/thumbnails/474046466-800x600.webp" price="150,000" description="Samsung 21S Ultra" location="Johar Town Lahore" time="2 Days Ago" />
    <Card src="https://images.olx.com.pk/thumbnails/482117172-800x600.webp" price="150,000" description="Samsung 21S Ultra" location="Johar Town Lahore" time="2 Days Ago"/>
    <Card src="https://images.olx.com.pk/thumbnails/468540693-800x600.webp" price="150,000" description="Samsung 21S Ultra" location="Johar Town Lahore" time="2 Days Ago"/>
    <Card src="https://images.olx.com.pk/thumbnails/481071097-800x600.webp" price="150,000" description="Samsung 21S Ultra" location="Johar Town Lahore" time="2 Days Ago"/>
    <Card src="https://images.olx.com.pk/thumbnails/479581094-800x600.webp" price="150,000" description="Samsung 21S Ultra" location="Johar Town Lahore" time="2 Days Ago"/>
    <Card src="https://images.olx.com.pk/thumbnails/479078013-800x600.webp" price="150,000" description="Samsung 21S Ultra" location="Johar Town Lahore" time="2 Days Ago"/>
    </div>
    </>
  )
}

export default App