class Profile{

    static idCounter = 1;

    constructor(age, name, bio) {
        this.age = age;
        this.name = name;
        this.bio = bio;
        this.profilePicture = null;
        this.id = Profile.idCounter++;
        this.profilePicture = `photos/7.jfif`;
    }
}