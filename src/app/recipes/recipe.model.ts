export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constuctor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}