// WORKING TOWERING ALGORITM PERFECT TIMING!!!! by serainox
// TEMPLATE

const loop_count = 1;
for(let i = 0; i < loop_count; ++i) {
const inv = Player.openInventory(); // Interact with inv
//const inp = Player.createPlayerInput(0, 0, 0, 0, true, false, false);
inv.setSelectedHotbarSlotIndex(2); // Select hotbar slot
Client.waitTick(5)  // Delay 1 tick
const inp = Player.createPlayerInput(0, 0, 0, 0, true, false, false);
Player.addInput(inp)
Client.waitTick(1)
Player.getPlayer().lookAt(0,90)
Client.waitTick(2); // Wait for 10 ticks = 0,5 sec.
Player.getPlayer().interact();
Client.waitTick(2); // Wait for 10 ticks = 0,5 sec.
Player.getPlayer().interact();
// JUMP AND PLACE SHULKER FROM THIRD HOTBAR SLOT + //OPEN SHULKER
Client.waitTick(15);
JsMacros.runScript("DRAG LOOP.js")
Client.waitTick(5); 
Chat.say("Huh?... Ohh shieet")  
}

//for (var i = 54; i <= 27; i++) {
//    if (Player.openInventory().getSlot(i).getItemID() == "minecraft:air") {
 //       break;
      
   
