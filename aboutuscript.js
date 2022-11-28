const textarea = document.getElementById('comment')
const changeCursor = (e) => {
  let {value} = e.target
  let newClass = getRangeColor(e.target.maxLength, value.length)
  
  e.target.classList.remove('good', 'warning', 'danger')
  e.target.classList.add(newClass)
}

const getRangeColor = (maxLen, inputLen) => {
  let range = maxLen / 3
  
  if (between(inputLen, 0, range)) {
    return 'good'
  } else if (between(inputLen, range, range*2)) {
    return 'warning'
  } else {
    return 'danger'
  }
}

const between = (x, min, max) => {
  return x >= min && x <= max;
}

textarea.addEventListener('input', changeCursor);

document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')
  
    setTimeout(() => {
      evt.target.classList.remove('loading')
    }, 3000);
  })