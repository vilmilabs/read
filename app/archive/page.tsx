import React from 'react'

const archive = () => {
  return (
    <main>
        <div className="text-3xl">
            Arhcive
        </div>
            <ul>
                <a href="/archive/" className='text-3xl underline'><li></li></a>
                <a href="/storage/pdf/a99-00001.pdf" className='text-3xl underline'><li>PDF     A broader view of psychopathy [17 min]</li></a>
                <a href="/storage/mp3/a99-00002.mp3" className='text-3xl underline'><li>MP3     Speaking of Psychology: How grieving changes the brain, with Mary-Frances O’Connor, PhD [34 min]</li></a>
                <a href="/base/not-found" className='text-3xl underline'><li>Kocsér Története</li></a>
            </ul>
    </main>
  )
}

export default archive