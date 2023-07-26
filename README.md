![](./docs/responsivepic.png)


# **INFORMAL ENGLISH QUIZ - 2nd milestone project**

## **Introduction**

</br>

This is my second milestone project in which I added Java Script to make the website interactive.  I created an Informal English quiz based on a lesson I used to teach as an EFL teacher. The phrases I included in the quiz were very confusing for me when I first arrived in the UK. I did not understand them even though I could speak very good English (at least that's what I thought back then). I hope the use of authentic, real English will make this quiz fun and useful for students of English who want to sound more like native speakers and improve their understanding of informal expressions.

[Visit the website here](https://agyluczak.github.io/INFORMAL-ENGLISH-QUIZ/)



</br>

## **UX-User Experience Design**
</br>




</br>

## **Strategy Plane**

</br>

**The business goals for the website:**

1. To check students knowledge of some common informal expressions in English.
2. To help students of English learn these expressions by providing an option of retaking the quiz as many times as they want.
3. To promote knowledge of informal English, as it's rarely taught in language schools.
4. To make the quiz fun and enjoyable so that it attracts students to take it more than once.

</br>

**User stories:**

1. As a first-time visitor, I want to easily understand the purpose of the quiz.
2. As a first-time visitor, I want to easily find instructions for the quiz.
3. As a first-time and returning visitor, I want to be able to easily navigate the quiz. I can access all the pages easily and go back to the Home Page quickly. I also want to be able to quit the quiz if I feel like it.
4. As a first-time and returning visitor, I want to be able to read the text easily and see all images clearly on different devices
5. As a first-time and returning visitor, I want to be able to retake the quiz as many times I want to to learn the expressions I got wrong.
6. As a first-time or returning visitor, I want to be able to save my score.

</br>

## **Scope Plane**

</br>

In order to achieve the strategy goals, the following features will be included on the website:
- A welcome message at the top of the Home Page stating clearly it is Informal English Quiz
- A hero image showing people chatting in a pub where people are likely to use Informal English
- A favicon with union-jack which is displayed next to the URL of the site in a browser's address bar to associate the quiz with the English language
- Navbar and buttons to navigate easily between the pages. Exit buttons allowing the user to quit the quiz.
- Instructions page which can be easily accessed through the navbar and the Instructions button
- Clear text and hero image which will be responsive on different devices. Right level of contrast between the text and the background.
- Play again button if the user wants to do the quiz again. The questions and the order of the answers will be shuffled to make the quiz more challenging.
- Submit form at the end of the quiz where a user can save their score after entering their name.

</br>

## **Structure Plane** 

</br>

The website consists of four pages:
- **Home**
- **Instructions**
- **Start Quiz**
- **Scores**

The navbar recurring on each page allows users to easily move between the pages and go back to Home Page quickly. I also used buttons to link the pages and make navigation of the website even easier. The exit button is used as well if a user wants to quit the quiz.
I used a Union Jack favicon in the address bar for every page to make it clear to the user they are still on the same website.  I used the same background colours for different sections on each page to create a certain design pattern to the website. The Home Page contains a short welcome message, a hero image and button links to Instructions page and Quiz page. The Quiz Page contains a head-up display with questions and score counter. Below it there is a question container and four answer containers that can be clicked on. At the end of the quiz the users will be taken to the scores page where they can save their score by entering their name. When the submit button is hit the form will be hidden and the score list will appear. Users will have a chance to retake the quiz or quit it by pressing the appropriate button. I also added a 404 error page that directs users to home page in case there is a problem with a link.

</br>

## **Known bugs and fixes**

</br>

1.  **CSS style could not be applied  to the quiz page**
- ***Solution:*** rearranged the order of the links and put the style sheet link under the bootstrap link. This way it prevented bootstrap from overriding the css style. (Credit: Stackoverflow)

2.	**Answer options didn't display**

![answers display issue](./docs/answers_display_error.png)

- ***Solution:*** added id to each answer option in quiz.html.

3. **The background colour didn't cover the entire element of answer containers**
- ***Solution:*** Added parent.node to selected answer in script.js (credit to my friend Harshit)

4. **Clicking worked only on the text, not on the whole answer container**
- ***Solution:*** moved onclick event to the answer containers in quiz.html

5. **When starting the quiz I was taken to the last question** 
- ***Solution:*** Added a global variable q for the number of questions

6.	**Several answer options could be clicked on before moving to the next question**
- ***Solution:*** Added setTimeout function 

7. **The quiz container didn't hide after the last question**
- ***Solution:*** Added a new div with an id outside bootstrap class div to prevent bootstrap from overriding it. (credit to my friend Harshit)

8. **Upon pressing enter instead of submit button, I was taken to the 1st question of the quiz**
- ***Solution:*** Swapped the anchor tag for a button one

9. **Unexpected token error**
![unexpected token issue](./docs/unexpected_token.png)

- ***Solution:*** Removed the links to script.js from html pages where the logic was not applied

A lot of issues were caused by incorrect syntax, missing brackets or forgetting to call the function.




</br>

