
Chat.say(".b set prefix #")
Client.waitTick(1)
Chat.say(".b stop")
World.playSound("block.ender_chest.open", 100)
Client.waitTick(1)
Chat.title("STOPPED", "Manually Terminated", 15, 22, 66)
//Chat.say("#stop")
