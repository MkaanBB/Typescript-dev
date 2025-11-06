abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
 
  
  private readonly radius: number;

  constructor(radius: number) {
    super(); 
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
    

const circle = new Circle(10);
console.log(circle.getArea());
