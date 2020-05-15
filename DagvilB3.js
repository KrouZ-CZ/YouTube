var hitbox = false;
var speed = false;
var velocity = false;
var glide = false;
var taptp = false;
var tower = false;
var safewalk = false;
print('После входа на сервер, напишите /hacks')
print('После входа на сервер, напишите /hacks')
print('После входа на сервер, напишите /hacks')
print('После входа на сервер, напишите /hacks')

function chatHook(text){

  if(text == "/hacks"){
  preventDefault();
  clientMessage("         §l§0(§cHacks§0)§r")
  clientMessage("§l§b/hitbox - Киллаура");
  clientMessage("§a§l/speed - СпидХак");
  clientMessage("§b§l/taptp - Телепортация тапом"); 
  clientMessage("§a§l/velocity - Скорость");
  clientMessage("§b§l/glide - Глайд");
  clientMessage("§a§l/tower - Прыжок тапом");
  clientMessage("§b§l/safewalk - Для мини игр");
  }

  if(text == "/hitbox"){
  preventDefault();
  if(hitbox == false){
  hitbox = true;
  clientMessage("§0§l(§bDagvil§0§l)§l§a Hitbox enabled!");
  }else{
  hitbox = false;
  clientMessage("§0§l(§bDagvil§0§l)§4§l Hitbox disabled!");
  }}
  
  if(text == "/speed"){
  preventDefault();
  if(speed == false){
  speed = true;
  clientMessage("§0§l(§bDagvil§0§l)§a§l Speed enabled!");
  }else{
  speed = false;
  clientMessage("§0§l(§bDagvil§0§l)§4§l Speed disabled!");
  }}
  
  if(text == "/velocity"){
  preventDefault();
  if(velocity == false){
  velocity = true;
  clientMessage("§0§l§(§bDagvil§0§l)§a§l Velocity enabled");
  }else{
  velocity = false;
  clientMessage("§0§l(§bDagvil§0§l)§l§4 Velocity disabled");
  }}
  
  if(text == "/glide"){
  preventDefault();
  if(glide == false){
  glide = true;
  clientMessage("§0§l(§bDagvil§0§l)§l§a Glide enabled");
  }else{
  glide = false;
  clientMessage("§0§l(§bDagvil§0§l)§l§4 Glide disabled");
  }}
  
  if(text == "/taptp"){
  preventDefault();
  if(taptp == false){
  taptp = true;
  clientMessage("§0§l(§bDagvil§0§l)§l§a TapTeleport enabled");
  }else{
  taptp = false;
  clientMessage("§0§l(§bDagvil§0§l)§l§4 TapTeleport disabled");
  }}
  
  if(text == "/tower"){
  preventDefault();
  if(tower == false){
  tower = true;
  clientMessage("§0§l(§bDagvil§0§l)§l§a Tower enabled");
  }else{
  tower = false;
  clientMessage("§0§l(§bDagvil§0§l)§l§4 Tower disabled");
  }}
  
  if(text == "/safewalk"){
  preventDefault();
  if(safewalk == false){
  safewalk = true;
  clientMessage("§0§l(§bDagvil§0§l)§l§a Safewalk enabled");
  }else{
  safewalk = false;
  clientMessage("§0§l(§bDagvil§0§l)§l§4 Safewalk disabled");
  }}

}

function modTick(){

var curspeed = Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));

  if(hitbox == true){
  Entity.setCollisionSize(Player.getPointedEntity(), 10, 10);
  }
  
  if(hitbox == false){
  Entity.setCollisionSize(Player.getPointedEntity(), 1, 2);
  }
  
  if(speed == true){
  if(getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) != 0){
  if(curspeed > 0.15){
  setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.26);
  setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.26);
  }}}
  
  if(glide == true){
  setVelY(getPlayerEnt(), -0.001);
  }
  
  if(safewalk == true){
  Entity.setSneaking(getPlayerEnt(), true);
  }
  
  if (velocity == true)
    {
        this.tick = 0;

        if (this.health > Entity.getHealth(getPlayerEnt()))
        {
            this.tick = 20;
            Entity.setImmobile(getPlayerEnt(), true);
        }
        if (this.tick == 0)
        {

            Entity.setImmobile(getPlayerEnt(), false);

        }

        this.health = Entity.getHealth(getPlayerEnt());

        if (this.tick != 0)
        {

            tick--;

        }}
        
     }
        
function useItem(x, y, z, itemId, blockId, side)
{
if(taptp == true){
setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())
 }
if(tower == true){
setVelY(getPlayerEnt(), 0.25);
}

}