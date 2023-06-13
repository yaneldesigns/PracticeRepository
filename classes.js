// create classes here
class Cloth {
    useDress (){
        console.log("Wear pink dress")
    }
}
class Casual extends Cloth {
    useDress (){
        super.useDress()
        console.log("Wear purple dress")
    }
}
class Fancy extends Cloth{
    useDress(){
        console.log("Wear a black dress")
    }
}
var dressCasual = new Casual();
var dressFancy = new Fancy();
dressCasual.useDress();
dressFancy.useDress();
