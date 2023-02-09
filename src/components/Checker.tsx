import { useLayoutEffect, useEffect, useState } from 'react'
import Ring from './Ring'

const check_url = () => {
  // set the request mode to 'no-cors' to make the request
  // CORS - Cross Origin Resource Sharing
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
  let is_ok = false
  fetch('http://74.91.121.157:8000', {
    mode: 'no-cors',
  }).then((response) => {
    is_ok = response.ok
  })
  return is_ok
}

const Checker = () => {

  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    console.log('Checker mounted')
    setIsOnline(check_url())
  })

  return (
    <div className="bg-zinc-900/50 backdrop-blur-lg p-2 rounded-xl">
      {!isOnline ? (
        <Ring color="rgba(200,200,200,1)" />
      ) : "✅"}
    </div>
  )
}

export default Checker
