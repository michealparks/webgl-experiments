const timeout = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, time)
  })
}

const fetch = async (...args) => {
  const response = await Promise.race([
    timeout(20000),
    globalThis.fetch(...args)
  ])

  if (response.ok) {
    return response
  } else {
    const text = await response.text()
    throw new Error(`${args[0]} - ${response.status} - ${text}`)
  }
}

export const fetchJSON = async (...args) => {
  const response = await fetch(...args)
  return response.json()
}

export const fetchBlob = async (...args) => {
  const response = await fetch(...args)
  return response.blob()
}

export const fetchArrayBuffer = async (...args) => {
  const response = await fetch(...args)
  return response.arrayBuffer()
}
