# ⭐ Tic-Tac-Toe Game

A simple, interactive, and mobile-responsive Tic-Tac-Toe game built using HTML, CSS, and JavaScript.

## 📌 Overview
This project is a browser-based Tic-Tac-Toe game where two players take turns placing O and X on a 3×3 grid. The game automatically:  

- switches turns  
- detects wins  
- detects draws  
- shows a winner message  
- allows game reset or new game  

The entire UI is styled using CSS and works smoothly on both desktop and mobile devices.

## 🎯 Features
-  Clean and colorful UI  
-  Hover effects for better feedback  
-  Responsive layout (mobile-friendly)  
-  Automatic win/draw detection  
-  Reset & New Game functions  
-  Easy-to-understand logic  
-  No external libraries needed  

## 🏗 Project Structure
### HTML
- Displays the game board  
- Shows winner messages  
- Contains buttons for gameplay  

### CSS
- Designs the board and layout  
- Adds hover animations  
- Handles mobile responsiveness  

### JavaScript
- Controls game logic  
- Tracks turns  
- Checks winning conditions  
- Manages draw detection  
- Enables/disables buttons  

## 🧠 Game Logic Explained (Humanized + Detailed)
### Player Turn Handling
-If `playerO` is true → place O  
-If false → place X 

After each click:
```javascript
button.innerText = 'O' or 'X';
button.disabled = true;   // So a box can’t be clicked twice
playerO = !playerO;       // Switch player
```

### Winning Pattern Logic
-Winning combinations are stored in an array:
```let winning_ptrn = [
  [0,1,2], [3,4,5], [6,7,8],   // Rows
  [0,3,6], [1,4,7], [2,5,8],   // Columns
  [0,4,8], [2,4,6]             // Diagonals
];
```
-Each turn, the game checks:
```Are the three positions non-empty?
Do they contain the same symbol?
If yes → winner found.
```
### Winner Detection Function

```const checkWinner = () => {
    console.log(count);
    for(let ptrn of winning_ptrn){
        let pos1val = buttons[ptrn[0]].innerText;
        let pos2val = buttons[ptrn[1]].innerText;
        let pos3val = buttons[ptrn[2]].innerText;
       
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val == pos2val && pos2val == pos3val){
                show_Winner(pos1val);
            }
            if (count === 9){
                let draw = "Draw";
                show_Winner(draw);
            }
        }
    }
}```

-This checks every possible win line until one matches.

### Draw Detection
-A draw occurs when:
-All 9 boxes are filled
-No winner has been found
-Handled using a counter:

```let count = 0;
count++;
if (count === 9) show_Winner("Draw");
```

### Reset / New Game
-Both buttons call the same function:

```const enabledbtn = () => {
    for (let button of buttons){
        button.disabled = false;
        button.innerText = ""
    }
};
const resetGame = () => {
    playerO = true;
    enabledbtn();
    msgbox.classList.add("hide");
    count = 0;
}
```
## 🎨 Styling & UI (Humanized Explanation)

Explain how you made it look nice, mobile-friendly, and interactive. For example:

- **Background gradient**: Creates a colorful, playful look.  
- **Board layout and size**: Maintains a perfect square using `vmin` units for responsive sizing.  
- **Button styles and hover effects**: Rounded corners, soft background, zoom-in effect, shadows for depth.  
- **Responsive design**: Adjusts grid and button sizes on smaller screens for easy mobile interaction.  

---

## 💡 Future Enhancements

Optional ideas for expanding the project:

- AI vs Player mode  
- Scoreboard to track wins  
- Dark mode  
- Sound effects  
- Confetti animation on win





