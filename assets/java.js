var dialog = document.querySelector('dialog')
document.querySelector('#open').onclick = function () {
  dialog.showModal()
}

function before() {
  document.getElementById('message').innerHTML =
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”'
}

function afterr() {
  document.getElementById('message').innerHTML =
    '“Я Джон и я Эмо. Однажды и тебе представится возможность оказаться на сайте в образе чувака, который толкает цитаты, но эмо тебе никогда не стать”'
}

const switchSourceOfImage = () => {
  const imageToChange = document.querySelector('#mainImage')
  const sourceOfImg1 = 'assets/images/about/1.jpg'
  const sourceOfImg2 = 'assets/images/about/2.jpg'
  const sourceOfImg3 = 'assets/images/about/3.jpg'
  const switchForward = () => {
    if (imageToChange.src === sourceOfImg1) {
      imageToChange.src = sourceOfImg2
    } else if (imageToChange.src === sourceOfImg2) {
      imageToChange.src = sourceOfImg3
    } else {
      imageToChange.src = sourceOfImg1
    }
  }
  const switchBackward = () => {
    if (imageToChange.src === sourceOfImg3) {
      imageToChange.src = sourceOfImg2
    } else if (imageToChange.src === sourceOfImg2) {
      imageToChange.src = sourceOfImg1
    } else {
      imageToChange.src = sourceOfImg3
    }
  }
  const buttonForward = document.querySelector('#forward')
  buttonForward.onclick(switchForward)
  const buttonBackward = document.querySelector('#backward')
  buttonBackward.onclick(switchBackward)
  return { switchForward, switchBackward }
}
