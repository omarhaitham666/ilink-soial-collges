import { useLayoutEffect, useRef, useState } from 'react'
import scene from './scene.svg?raw'
import backdrop from './backdrop.svg?url'
import music from './intro.mp3?url'
import './splash.css'

export default function AuthSplash() {
  const [open, setOpen] = useState(true)
  const [take, setTake] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [soundError, setSoundError] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const audio = useRef<HTMLAudioElement>(null)

  useLayoutEffect(() => {
    if (!open) return

    const element = dialog.current
    if (!element) return
    if (!element.open) element.showModal()


    const timer = window.setTimeout(() => setOpen(false), 2200)
    return () => {
      window.clearTimeout(timer)
      element.close()
    }
  }, [open, take])

  async function replay() {
    const track = audio.current
    if (!track || playing) return

    setSoundError(false)
    setPlaying(true)
    try {
      track.currentTime = 0
      await track.play()
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setTake(previous => previous + 1)
        setOpen(true)
      }
    } catch {
      setPlaying(false)
      setSoundError(true)
    }
  }

  function skip() {
    const track = audio.current
    if (track) track.pause()
    setPlaying(false)
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className="il-intro-replay"
        onClick={replay}
        disabled={playing}
      >
        Replay intro with sound
      </button>
      {soundError && <small role="status">Sound unavailable. Try again.</small>}

      <audio
        ref={audio}
        src={music}
        preload="none"
        onEnded={() => setPlaying(false)}
      />

      {open && (
        <dialog
          key={take} ref={dialog}
          className="il-intro"
          aria-label="iLink introduction"
          onCancel={event => { event.preventDefault(); skip() }}
          style={{ backgroundImage: `url("${backdrop}")` }}
        >
          <div key={take} className="il-intro-stage">
            <div
              className="il-intro-art"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: scene }}
            />
            <p className="il-intro-tagline">CONNECT · COLLABORATE · CREATE</p>
            <i className="il-intro-flash" aria-hidden="true" />
          </div>
          <div className="il-intro-controls">
            {!playing && <button type="button" onClick={replay}>Play with sound</button>}
            <button type="button" onClick={skip}>Skip</button>
          </div>
        </dialog>
      )}
    </>
  )
}