import { loadHomeController } from './home.controller.mjs';
import { loadRegistrationController } from './registration.controller.mjs';
import { loadSecurityController } from './security.controller.mjs';
import { loadNoteController } from './loadNoteController.1.mjs';

export function loadApplicationController(app) {
    

    
    loadNoteController(app);
}
