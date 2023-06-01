class Entity {

    constructor(scene, spriteName, name) {
        this.scene = scene;
        this.name = name;
        this.spriteName = spriteName;

        this.sprite = this.scene.physics.add.sprite(0, 0, spriteName);

        // ONLY USED FOR BOUNDING BOX
        this.width = this.sprite.width;
        this.height = this.sprite.height;

        this.alive = true;
    };

    getBoundingBox() {
        const box = [
            this.sprite.x - (this.width / 2),
            this.sprite.y - (this.height / 2),
            this.sprite.x + (this.width / 2),
            this.sprite.y + (this.height / 2),
        ]; // bottom left x, bottom left y, top right x, top right y,
        return box;
    }

    getCollision(collisionEntity) {

        let isBetween = (x, a, b) => {
            return x >= a && x <= b;
        };

        let bbox1 = this.getBoundingBox();
        let bbox2 = collisionEntity.getBoundingBox();


        const xOverlap1 = isBetween(bbox1[0], bbox2[0], bbox2[2]) || isBetween(bbox1[2], bbox2[0], bbox2[2]);
        const yOverlap1 = isBetween(bbox1[1], bbox2[1], bbox2[3]) || isBetween(bbox1[3], bbox2[1], bbox2[3]);
        const xOverlap2 = isBetween(bbox2[0], bbox1[0], bbox1[2]) || isBetween(bbox2[2], bbox1[0], bbox1[2]);
        const yOverlap2 = isBetween(bbox2[1], bbox1[1], bbox1[3]) || isBetween(bbox2[3], bbox1[1], bbox1[3]);

        return (xOverlap1 && yOverlap1) || (xOverlap2 && yOverlap2);
    }

    getEntityType() {
        return "Entity";
    }

    update() {}

    destroy() {
        this.sprite.destroy();
    }
}