import Vue from 'vue'

// Custom Input Field Directive
const classMethod = (el, value) => {
  el.children[1].children[0].children[0].addEventListener('focus', () => {
    el.children[0].classList.add('has-value')
  })
  el.children[1].children[0].children[0].addEventListener('blur', () => {
    if (value === '') {
      el.children[0].classList.remove('has-value')
    } else {
      el.children[0].classList.add('has-value')
    }
  })
}

Vue.directive('custom-input', {
  bind (el, binding) {
    if (binding.value !== '') {
      el.children[0].classList.add('has-value')
    }
    classMethod(el, binding.value)
  },
  update: (el, binding) => {
    if (binding.value !== '') {
      el.children[0].classList.add('has-value')
    } else {
      el.children[0].classList.remove('has-value')
    }
    classMethod(el, binding.value)
  }
})

// Input Field Allow Only Number
const onlyNumber = (el) => {
  const input = el.children[0]
  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 46 || e.keyCode === 8) {
      return false
    } if (e.keyCode < 48 || e.keyCode > 57) {
      e.preventDefault()
    }
  })
}

Vue.directive('only-number', {
  bind: (el) => {
    onlyNumber(el)
  },
  update: (el) => {
    onlyNumber(el)
  }
})
