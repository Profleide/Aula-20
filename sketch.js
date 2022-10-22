const Engine = Matter.Engine;// motor de física 
const World = Matter.World;// mundo físico e adicionar objetos a ele
const Bodies = Matter.Bodies;// cria os objetos físicos que habitam o mundo
const Body = Matter.Body; // CORPO

let engine; // inicializando a mecanica
let world; // inicializando o mundo

var ball; // bola
var ground; // chão
var rock; // pedra

function setup() {



  
  createCanvas(500,500);// criando tela
  engine = Engine.create();// motor espaço
  world = engine.world;// mundo 
  
   var ball_options = {// criando a bola e colocando propriedades colocando restituição e fricção de ar
    restitution: 0.95,// significa o quão elastica a bola e, quanto maior mas elastica
    frictionAir:0.01// atrito do ar quanto maior mais lento sera o movimento da bola
  }
  // outras propriedade como peso, rigidez, arrasto
  var rock_options = {
    restitution: 0.85,
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(250,390,400,20,ground_options);// criando retangulhos 
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,ground_options);// criando retangulhos
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);// corpo de bola criando uma bola no mundo
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);// precisamos usar a função ellipese para exibir os corpos o motor de fisica, passamos posição x, y e o raio da bola
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
 
}

