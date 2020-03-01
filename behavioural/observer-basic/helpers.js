function extend(ext, obj) {
  for(let key in ext) {
    obj[key] = ext[key]
  }
}

export {
  extend
}