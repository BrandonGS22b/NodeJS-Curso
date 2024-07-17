import { Server } from "./presentation/server";

(async () => {
    try {
   
        main();
        
    } catch (error) {
        console.error('Error during initialization:', error);
    }
})();

function main() {
    Server.start();
}
