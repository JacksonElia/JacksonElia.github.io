class End extends Phaser.Scene {

    constructor() {
        super("end");
    }

    preload() {
    }

    create() {
        this.add.text(200, 100, "You Win!", { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 200 });
    }

    update() {

    }

}