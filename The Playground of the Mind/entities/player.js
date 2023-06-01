class Player extends Entity {
    constructor(scene, spriteName, name) {
        super(scene, spriteName, name);
        this.sprite.setPosition(gameWidth / 2, gameHeight / 2);

        this.Wkey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.Akey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.Skey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.Dkey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    getEntityType() {
        return "Player";
    }

    update() {

        let targetVelocityX = 0;
        let targetVelocityY = 0;
        const speed = 256;
        const speedRamp = 5;


        if (this.Wkey.isDown) {
            targetVelocityY -= speed;
            this.sprite.angle = 0;
        }
        if (this.Akey.isDown) {
            targetVelocityX -= speed;
            this.sprite.angle = 270;
        }
        if (this.Skey.isDown) {
            targetVelocityY += speed;
            this.sprite.angle = 180;
        }
        if (this.Dkey.isDown) {
            targetVelocityX += speed;
            this.sprite.angle = 90;
        }

        const currentVelocityX = this.sprite.body.velocity.x;
        const currentVelocityY = this.sprite.body.velocity.y;
        const newVelocityX = currentVelocityX + ((targetVelocityX - currentVelocityX) / speedRamp);
        const newVelocityY = currentVelocityY + ((targetVelocityY - currentVelocityY) / speedRamp);

        // Animations
        if (Math.abs(currentVelocityX) > 5 || Math.abs(currentVelocityY) > 5) {
            this.sprite.play("walk", true);
        } else {
            this.sprite.play("idle", true);
        }

        this.sprite.setVelocityX(newVelocityX);
        this.sprite.setVelocityY(newVelocityY);

        // // Collision
        // for (var _projectile of this.scene.projectiles) {
        //     if (_projectile.mask === "Enemy") {
        //         if (this.getCollision(_projectile)) {
        //             this.health -= _projectile.damage;
        //             _projectile.alive = false;
        //         }
        //     }
        //

    }
}