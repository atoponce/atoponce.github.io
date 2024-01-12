function populateCube(size) {
  // For testing so I don't have to keep populating cubes.
  const types = ["mini", "rubik", "master", "professor"]
  const type = types[size - 2]

  for (let i = 1; i <= size ** 2 * 6; i++) {
    const facelet = document.getElementById(type + "-" + i)
    facelet.className = "facelet"

    if (i < size ** 2 + 1) facelet.classList.add("white")
    else if (i < 2 * size ** 2 + 1) facelet.classList.add("orange")
    else if (i < 3 * size ** 2 + 1) facelet.classList.add("green")
    else if (i < 4 * size ** 2 + 1) facelet.classList.add("red")
    else if (i < 5 * size ** 2 + 1) facelet.classList.add("blue")
    else facelet.classList.add("yellow")
  }
}

function clearCube(size) {
  // For testing so I don't have to keep clearing cubes.
  const types = ["mini", "rubik", "master", "professor"]
  const type = types[size - 2]
  const id = document.getElementById(type + "-hash")

  for (let i = 1; i <= size ** 2 * 6; i++) {
    const facelet = document.getElementById(type + "-" + i)
    facelet.className = "facelet"
  }

  id.innerHTML = ""
}

function getColor(element) {
  document.getElementById("color").className = element.className
}

function setColor(element) {
  const color = document.getElementById("color").className
  element.className = "facelet"
  element.classList.add(color)
}

function sha256(str) {
  const buffer = new TextEncoder("utf-8").encode(str)

  return crypto.subtle.digest("SHA-256", buffer).then(function(digest) {
    return digest
  })
}

function toggleSwatches(disp) {
  const id = document.getElementById("color-swatches")
  id.style.display = disp
}

function collectFacelets(size, output) {
  const cube = []
  const count = size ** 2 * 6
  const types = ["mini", "rubik", "master", "professor"]
  const type = types[size - 2]

  for (let i = 1; i <= count; i++) {
    const id = document.getElementById(type + "-" + i)

    if (id.classList.length === 2) {
      const color = id.classList[1] // assumes "facelet white", "facelet orange", etc.
      cube.push(color[0]) // first character of "white", "orange", etc.
    } else {
      output.innerHTML = "Every facelet needs a color."
      output.style.color = "red"
      return false
    }
  }

  return cube
}

function checkColorCount(cube) {
  let errorMessage = []
  const colorCounts = {}
  const maxPerColor = cube.length / 6
  const faceletCount = cube.length

  cube.forEach(function (i) { colorCounts[i] = (colorCounts[i] || 0) + 1 })

  if (colorCounts["w"] !== maxPerColor) errorMessage.push("Wrong white color count.")
  if (colorCounts["o"] !== maxPerColor) errorMessage.push("Wrong orange color count.")
  if (colorCounts["g"] !== maxPerColor) errorMessage.push("Wrong green color count.")
  if (colorCounts["r"] !== maxPerColor) errorMessage.push("Wrong red color count.")
  if (colorCounts["b"] !== maxPerColor) errorMessage.push("Wrong blue color count.")
  if (colorCounts["y"] !== maxPerColor) errorMessage.push("Wrong yellow color count.")

  return errorMessage
}

function hashCube(size) {
  let result = ""
  const types = ["mini-hash", "rubik-hash", "master-hash", "professor-hash"]
  const id = document.getElementById(types[size - 2])

  const cube = collectFacelets(size, id)

  if (!cube) return false

  const errors = checkColorCount(cube)

  if (errors.length !== 0) {
    id.innerHTML = ""
    for (let i = 0; i < errors.length; i++) {
      id.innerHTML += errors[i] + "<br/>"
      id.style.color = "red"
    }

    return false
  }

  sha256(cube.join("")).then(function(digest) {
    let result = ""
    const view = new DataView(digest)

    if (size === 2) { // 2x2: ~21 bits (0x1f_ff_ff)
      const n = view.getUint8(0) & 0x1f
      result = n.toString(16).padStart(2, "0")
      for (let i = 1; i < 3; i++) result += view.getUint8(i).toString(16).padStart(2, "0")
      console.log(result)
    } else if (size === 3) { // 3x3: ~65 bits (0x1_ff_ff_ff_ff_ff_ff_ff_ff)
      const n = view.getUint8(0) & 0x1
      result = n.toString(16)
      for (let i = 1; i < 9; i++) result += view.getUint8(i).toString(16).padStart(2, "0")
    } else if (size === 4) { // 4x4: ~152 bits (0xff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff)
      for (let i = 1; i < 19; i++) result += view.getUint8(i).toString(16).padStart(2, "0")
    } else { // 5x5: ~247 bits (0x7f_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff_ff)
      const n = view.getUint8(0) & 0x7f
      result = n.toString(16).padStart(2, "0")
      for (let i = 1; i < 31; i++) result += view.getUint8(i).toString(16).padStart(2, "0")
    }

    id.innerHTML = result
    id.style.color = ""
  })
}
