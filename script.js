
const ratings = document.querySelectorAll('.rating')
const ratingScreen = document.querySelector('.rating-container')
const responseScreen = document.querySelector('.response-screen')
const submitBtn = document.getElementById('submit')

const displayRating = document.querySelector('.display-rating')

let rateValue;

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        ratings.forEach(element => {
            element.classList.remove('rating-selected');
            element.classList.add('rating')
        })

        if(rating.classList.contains('rating')) {
            rating.classList.remove('rating')
            rating.classList.add('rating-selected')
            console.log(rating.classList)
            rateValue = rating.value
            console.log(rateValue)
        } 
    })
})

submitBtn.addEventListener("click", () => {
    if(rateValue > 0) {
        ratingScreen.classList.add("hide-container")
        responseScreen.classList.remove("response-screen")
        responseScreen.classList.add("show-response")
        displayRating.innerHTML = `You selected ${rateValue} out of 5`
    }
})




