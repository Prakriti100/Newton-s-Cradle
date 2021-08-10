class rope{
	constructor(body1,body2,pointA,pointB)
	{

		this.pointA = pointA
		this.pointB = pointB


		var options ={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}

		}

	//create rope constraint here

	 Rope = Matter.Constraint.create({
				bodyA:body1,
				bodyB:body2,
				pointB:{x:this.pointA, y:this.pointB},
				length:100,
				stiffness:0.1
			});
		World.add(world,Rope);
	}


    //create display() here 

	display(){
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		line(roof.x,roof.y,bob1.x,bob1.y);
		line(roof.x,roof.y,bob2.x,bob2.y);
		line(roof.x,roof.y,bob3.x,bob3.y);
		line(roof.x,roof.y,bob4.x,bob4.y);
		line(roof.x,roof.y,bob5.x,bob5.y);

	}

}
