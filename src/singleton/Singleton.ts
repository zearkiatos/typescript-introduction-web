import { isMissingDeclaration } from "typescript";

class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    static getInstance() {
        console.log(Singleton.instance);
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton;