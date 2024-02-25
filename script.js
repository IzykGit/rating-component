
const ratings = document.querySelectorAll('.rating')
const ratingScreen = document.querySelector('.rating-container')
const responseScreen = document.querySelector('.response-screen')
const submitBtn = document.getElementById('submit')

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
        else {
            rating.classList.add('rating')
            rating.classList.remove('rating-selected')
            console.log(rating.classList)
        }
    })
})

submitBtn.addEventListener("click", () => {
    if(rateValue > 0) {
        ratingScreen.classList.add("hide-container")
        responseScreen.classList.add("show-response")

    }
})




