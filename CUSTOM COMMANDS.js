 CUSTOM COMMANDS LIB
 
1. Meteor Commands
2. Mod Commands
3. Special prefix Commands
4. Server Commands

//x COMMAND [x=prefix]
 //-SUB-COMMAND
//Prefix Command [ID] -Sumbcommands ~Value

 METEOR COMMANDS [.]
.commands - show commands
.features - list of available modules
.binds    - show keybinds



.server -info -plugins -tps 
    [General info][Bypass /plugins restriction][Ticks per second]
  
.profile [ID] -load -save -delete
    [Loads profile using command][10 Second LAG]
    [Works only on already existing profiles]

.binds [Shows All Client-Side Keybinds]
.bind MODULE-ID // After exec, trigger listen for key to bind
.reset bind MODULE-ID // Un-Binds said module

.reset -bind -gui -hud -settings MODULE-ID
  -bind resets module bind
  -settings resets module config

.clear-chat [Clears All Chat]
.damage 1-7 [7 deals 4 hearts] [works only with /op or on single]

.drop -all -hand -hotbar -inventory -ITEM-ID
  
 
