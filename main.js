// Handles interactions
// - Toggles display of feeding schedule table

const showScheduleTrigger = document.querySelectorAll('.js-show-schedule');

const showSchedule = (e) => {
    let schedule = document.querySelector('.js-overlap-container');
    // Only toggle when button is clicked (not tile)
    if (schedule.classList.contains('expand') && e.target.classList.contains('js-toggle-schedule')) {
        schedule.classList.toggle('expand');
        // scroll intoview on mobile
        if (window.innerWidth < 700 && schedule.classList.contains('expand')) {
            document.querySelector('[data-name="schedule"]').scrollIntoView();
        }
    } else {
        schedule.classList.add('expand');
        // scroll intoview on mobile
        if ( window.innerWidth < 700) {
            document.querySelector('[data-name="schedule"]').scrollIntoView();
        }
    }
}

const mealCountdown = () => {
    // get time until next meal (8:30)
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let dinnerHour = 20;
    let dinnerMinute = 30;
    let breakfastHour = 8;
    let breakfastMinute = 30;

    // Default to breakfast countdown
    let hourUntilMeal = breakfastHour - currentHour;
    let minuteUntilMeal = breakfastMinute - currentMinute;

    // Swap to dinner if applicable
    if (currentHour < dinnerHour && currentHour > breakfastHour) {
        hourUntilMeal = dinnerHour - currentHour;
        minuteUntilMeal = dinnerMinute - currentMinute;
    }

    if (minuteUntilMeal < 1) {
        minuteUntilMeal = 30 - (minuteUntilMeal * -1);
    }

    document.querySelector('.js-countdown-hour').innerText = hourUntilMeal
    document.querySelector('.js-countdown-minute').innerText = minuteUntilMeal
}

mealCountdown();
setInterval(mealCountdown, 10000);
showScheduleTrigger.forEach(function(el) {el.addEventListener('click', showSchedule)});

