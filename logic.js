

function thaum() {
    $("#overwrite").html("<p>Thaumaturgy - once per day</p>");
    $("#overwrite").append("<p>You manifest a minor wonder, a sign of supernatural power, within range (30 ft). You create one of the following magical effects within range:</p>");
    $("#overwrite").append("<p>• Your voice booms up to three times as loud as normal for 1 minute.</p>");
    $("#overwrite").append("<p>• You cause flames to flicker, brighten, dim, or change color for 1 minute.</p>");
    $("#overwrite").append("<p>• You cause harmless tremors in the ground for 1 minute.</p>");
    $("#overwrite").append("<p>• You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.</p>");
    $("#overwrite").append("<p>• You instantaneously cause an unlocked door or window to fly open or slam shut.</p>");
    $("#overwrite").append("<p>• You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.</p>");
}

function hexbladesCurse() {
    $("#overwrite").html("<p>Hexblade's Curse</p>");
    $("#overwrite").append("<p>Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:</p>");
    $("#overwrite").append("<p>• You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.</p>");
    $("#overwrite").append("<p>• Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.</p>");
    $("#overwrite").append("<p>• If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).</p>");
    $("#overwrite").append("<p>You can’t use this feature again until you finish a short or long rest.</p>");
}

function hexWarrior() {
    $("#overwrite").html("<p>Hex Warrior</p>");
    $("#overwrite").append("<p>At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.</p>");
    $("#overwrite").append("<p>The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.</p>");
}

function burning() {
    $("#overwrite").html("<p>Burning Hands</p>");
    $("#overwrite").append("<p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15 ft cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</p>");
}

function mageHand() {
    $("#overwrite").html("<p>Mage Hand</p>");
    $("#overwrite").append("<p>Duration: 1 minute</p>");
    $("#overwrite").append("<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.</p>");
    $("#overwrite").append("<p>You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.</p>");
    $("#overwrite").append("<p>You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magic items, or carry more than 10 pounds.</p>");
}

function minorIllusion() {
    $("#overwrite").html("<p>Minor Illusion</p>");
    $("#overwrite").append("<p>Duration: 1 minute</p>");
    $("#overwrite").append("<p>You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.</p>");
    $("#overwrite").append("<p> If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.</p>");
    $("#overwrite").append("<p> If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.</p>");
    $("#overwrite").append("<p> If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.</p>");
}

function protection() {
    $("#overwrite").html("<p>Protection From Good and Evil</p>");
    $("#overwrite").append("<p>Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.</p>");
}

function ravenQueen() {
    $("#overwrite").html("<p>Blessing of the Raven Queen</p>");
    $("#overwrite").append("<p>Once per long rest, you can teleport 30 feet to an unoccupied space that you can see as a bonus action. At the third level, you get resistance to all damage for the next turn after using this trait.</p>");
}

function feyAncestry() {
    $("#overwrite").html("<p>Fey Ancestry</p>");
    $("#overwrite").append("<p>Advantage on charmed saves and immune to sleep magic.</p>");
}

function shelterTheFaithful() {
    $("#overwrite").html("<p>Shelter the Faithful</p>");
    $("#overwrite").append("<p>You and your companions can expect free healing at an establishment of your faith.</p>");
}

function comprehendLanguages() {
    $("#overwrite").html("<p>Comprehend Languages</p>");
    $("#overwrite").append("<p>Duration: 1 hour</p>");
    $("#overwrite").append("<p>For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. </p>");
    $("#overwrite").append("<p>It takes about 1 minute to read one page of text. This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.</p>");
}

function unseenServant() {
    $("#overwrite").html("<p>Unseen Servant</p>");
    $("#overwrite").append("<p>Duration: 1 hour</p>");
    $("#overwrite").append("<p>This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends</p>");
    $("#overwrite").append("<p>. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends</p>");
}

function trance() {
    $("#overwrite").html("<p>Trance</p>");
    $("#overwrite").append("<p>Trance 4 hrs. instead of sleep 8.</p>");
}

function quarterstaff() {
    $("#overwrite").html("<img style='max-width: 300px' src='./images/quarterstaff.png'></img>");
}

function crossbow() {
    $("#overwrite").html("<img style='max-width: 300px' src='./images/crossbow.png'></img>");
}

function dagger() {
    $("#overwrite").html("<img style='max-width: 300px; max-height: 300px;' src='./images/dagger.png'></img>");
}

function playDiceSound(){
      

    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function rolld4() {
    let diceImage;
    playDiceSound();
    $("#overwrite").html("<h1>D4 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,4);

    
        if (rolled == 1) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
        }
        if (rolled == 2) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
        }
        if (rolled == 3) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
        }
        if (rolled == 4) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
        }
    
    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld6() {
    playDiceSound();
    $("#overwrite").html("<h1>D6 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,6);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    
    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld8() {
    playDiceSound();
    $("#overwrite").html("<h1>D8 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,8);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld10() {
    playDiceSound();
    $("#overwrite").html("<h1>D10 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,10);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }
    if (rolled == 9) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/9dieSpecial.png'></img>"
    }
    if (rolled == 10) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/10dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld12() {
    playDiceSound();
    $("#overwrite").html("<h1>D12 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,12);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }
    if (rolled == 9) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/9dieSpecial.png'></img>"
    }
    if (rolled == 10) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/10dieSpecial.png'></img>"
    }
    if (rolled == 11) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/11dieSpecial.png'></img>"
    }
    if (rolled == 12) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/12dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);

    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld20() {
    playDiceSound();
    $("#overwrite").html("<h1>D20 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,20);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }
    if (rolled == 9) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/9dieSpecial.png'></img>"
    }
    if (rolled == 10) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/10dieSpecial.png'></img>"
    }
    if (rolled == 11) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/11dieSpecial.png'></img>"
    }
    if (rolled == 12) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/12dieSpecial.png'></img>"
    }
    if (rolled == 13) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/13dieSpecial.png'></img>"
    }
    if (rolled == 14) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/14dieSpecial.png'></img>"
    }
    if (rolled == 15) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/15dieSpecial.png'></img>"
    }
    if (rolled == 16) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/16dieSpecial.png'></img>"
    }
    if (rolled == 17) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/17dieSpecial.png'></img>"
    }
    if (rolled == 18) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/18dieSpecial.png'></img>"
    }
    if (rolled == 19) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/19dieSpecial.png'></img>"
    }
    if (rolled == 20) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/20dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);

    $("#overwrite").append("<h1>" + rolled + "</h1>");
}