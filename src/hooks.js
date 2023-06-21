import { corsMiddleware } from './hooks/cors.js';




export const hooks = {
    /* другие хуки */
    async beforeParse(request, response) {
        // ваша логика
    },
    /* другие хуки */
    
    middlewares: [
        corsMiddleware, // добавляем ваш Cors-мидлвар в список middleware
        /* другие middleware */
    ],
};