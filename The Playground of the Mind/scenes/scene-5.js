class Scene5 extends Phaser.Scene {

    constructor() {
        super("scene-5");
    }

    preload() {
        this.load.image("mainchar", "images/title_image.png");
        this.load.image("shape1", "images/thing1.png");
        this.load.image("shape2", "images/thing2.png");
        this.load.image("shape3", "images/thing3.png");
        this.load.image("shape4", "images/thing4.png");
        this.load.image("shape5", "images/thing5.png");
    }

    create() {
        this.player = new Player(this, "mainchar", "Main Character");
        this.player.sprite.scale = 2 / 3;
        this.firstShapes = [];
        for (var i = 0; i<8; i++) {
            var shape = new Shape(this, "shape" + Math.ceil(Math.random() * 5).toString(), i.toString());
            shape.sprite.x = Math.ceil(Math.random() * 700) + 100;
            shape.sprite.y = Math.ceil(Math.random() * 350) + 100;
            this.firstShapes.push(shape);
        }
        this.add.text(10, 10, 'Memorize all of the shapes. Once you have them memorized,', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        this.add.text(10, 40, "press c and pick the shape that wasn't there before.", { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        this.add.text(10, 70, "Don't mess up :)", { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        this.Ckey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.CkeySwitch = false;
    }

    update() {
        this.player.update();
        if (this.Ckey.isDown && !this.CkeySwitch) {
            this.CkeySwitch = true;
            for (var shape of this.firstShapes) {
                shape.sprite.x += 1000;
            }
            return new Promise(r => setTimeout(r, 3000)).then(() => {
                for (var shape of this.firstShapes) {
                    shape.sprite.x -= 1000;
                }
                this.newShape = new Shape(this, "shape" + Math.ceil(Math.random() * 5).toString(), "69");
                this.newShape.sprite.x = Math.ceil(Math.random() * 700) + 100;
                this.newShape.sprite.y = Math.ceil(Math.random() * 350) + 100;
                this.player.sprite.x = 20;
                this.player.sprite.y = 200;
            })
        }

        if (this.newShape != null) {
            if (this.player.getCollision(this.newShape)) {
                this.scene.stop("scene-5");
                this.scene.start("end");
            }
        }

        if (this.CkeySwitch) {
            for (var shape of this.firstShapes) {
                if (this.player.getCollision(shape)) {
                    this.CKeySwitch = false;
                    this.newShape = null;
                    this.scene.stop("scene-5");
                    this.scene.start("scene-1");
                }
            }
        }
    }

}