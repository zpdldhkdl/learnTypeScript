interface Shape {
    getArea(): number;
}

// implements 로 Shape 조건 충족
class Circle implements Shape {
    // radius: number;
    //
    // constructor(radius: number) {
    //     this.radius = radius;
    // }
    // 생성자에 public, private, accessor 사용해서 생략가능

    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})
