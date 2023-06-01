class Scene2 extends Phaser.Scene {

    constructor() {
        super("scene-2");
    }

    preload() {
        this.load.image("mainchar", "images/title_image.png");
        this.load.image("scene2tiles", "images/New Piskel (5).png");
        this.load.tilemapCSV("scene2", "scene-3.csv");
    }

    create() {
        this.baseTilemap = this.make.tilemap(
            {key: "scene2", tileWidth: 32, tileHeight: 32});
        var world1tiles = this.baseTilemap.addTilesetImage("scene2tileset",
            "scene2tiles");
        this.tiles = this.baseTilemap.createLayer(0, world1tiles, 0, 0);
        this.tiles.scale = 3 / 4;
        this.player = new Player(this, "mainchar", "Main Character");
        this.player.sprite.scale = 2 / 3;
        this.add.text(10, 10, 'Walk to the color that is different', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        this.add.text(10, 40, 'If you get it wrong you have to restart the game', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        this.player.sprite.x = 470;
        this.player.sprite.y = 400;
    }

    update() {
        this.player.update();
        // If thet get it right, they go to the next level
        if (Math.abs(470 - this.player.sprite.x) < 50 && Math.abs(225 - this.player.sprite.y) < 50) {
            this.scene.stop("scene-2");
            this.scene.start("scene-3");
        // If they get it wrong the go back to the beginning
        } else if ((Math.abs(250 - this.player.sprite.x) < 50 && Math.abs(225 - this.player.sprite.y) < 50)
            || (Math.abs(710 - this.player.sprite.x) < 50 && Math.abs(225 - this.player.sprite.y) < 50)) {
            this.scene.stop("scene-2");
            this.scene.start("scene-1");
        }
        console.log(this.player.sprite.x);
    }

}