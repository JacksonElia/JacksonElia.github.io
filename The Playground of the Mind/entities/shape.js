class Shape extends Entity {

    constructor(scene, spriteName, name) {
        super(scene, spriteName, name);
    }

    getEntityType() {
        return "Shape";
    }

    update() {}

}