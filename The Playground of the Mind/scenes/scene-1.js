class Scene1 extends Phaser.Scene {

    constructor() {
        super("scene-1");
    }

    preload() {
        this.load.spritesheet("mainchar", "images/New Piskel (6).png",
            {frameWidth: 32, frameHeight: 32});
        this.load.image("world1tiles", "images/blocksnormal.png");
        this.load.tilemapCSV("maze", "Maze .csv");
    }

    create() {
        this.baseTilemap = this.make.tilemap(
            {key: "maze", tileWidth: 32, tileHeight: 32});
        var world1tiles = this.baseTilemap.addTilesetImage("world1tileset",
            "world1tiles");
        this.tiles = this.baseTilemap.createLayer(0, world1tiles, 0, 0);
        this.tiles.scale = 3 / 4;
        this.tiles.setCollisionBetween(0, 0);
        this.player = new Player(this, "mainchar", "Main Character");
        this.player.sprite.scale = 2 / 3;
        this.playerCollider = this.physics.add.collider(this.player.sprite,
            this.tiles);
        this.player.sprite.x = 324;
        this.player.sprite.y = 470;

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("mainchar",
                {start: 0, end: 0}),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("mainchar",
                {start: 1, end: 4}),
            frameRate: 3,
            repeat: -1
        });
    }

    update() {
        this.player.update();
        if (Math.abs(324 - this.player.sprite.x) < 5 && Math.abs(60 - this.player.sprite.y) < 5) {
            this.scene.stop("scene-1");
            this.scene.start("scene-2");
        }
        console.log(this.player.sprite.y);
    }

}