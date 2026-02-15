
      let currentLevel = 1;

      const badge = document.getElementById("badge");
      const msg = document.getElementById("msg");
      const levelUpBtn = document.getElementById("levelUpBtn");

      levelUpBtn.onclick=function() {

        currentLevel++;
        msg.textContent = "You leveled up! Current Level: " + currentLevel;
        
      }
